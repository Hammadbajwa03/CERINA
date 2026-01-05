"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import Image from "next/image";

// ============================================
// CORE CONSTANTS (CMS-editable defaults)
// ============================================

// NHS Constants
const NHS_CONSTANTS = {
  CERINA_COST_PER_USER: 50, // £50/yr licence (changed from £180 per sanity check note)
  DIRECT_SAVING_PER_USER: 120, // vs legacy early CBT/Step 1 cost
  CLINICIAN_RATE: 50, // £/hr
  ENGAGEMENT_RATE: 0.61, // 61% completion/meaningful engagement
  // Scenario-specific values
  scenarios: {
    conservative: {
      HOURS_SAVED_PER_USER: 1.67,
      DEFLECTION_SAVING_PER_USER: 8.5,
      RX_SAVING_PER_USER: 1.23,
    },
    typical: {
      HOURS_SAVED_PER_USER: 3.0,
      DEFLECTION_SAVING_PER_USER: 12.75,
      RX_SAVING_PER_USER: 1.85,
    },
    best: {
      HOURS_SAVED_PER_USER: 5.0,
      DEFLECTION_SAVING_PER_USER: 17.0,
      RX_SAVING_PER_USER: 2.47,
    },
  },
};

// Business Constants
const BUSINESS_CONSTANTS = {
  AFFECTED_RATE: 0.21, // 21% - employees materially impacted by stress/burnout
  REDUCTION_RATE: 0.20, // 20% reduction in lost time
  ADOPTION_RATE: 0.50, // 50% of affected actually use Cerina
  CERINA_COST_PER_USER: 180, // £/yr
  DEFAULT_HOURS_LOST_PER_MONTH: 8, // default hours lost per affected employee per month
  DEFAULT_ANNUAL_SALARY: 35000, // default annual salary in GBP
  WORKING_WEEKS_PER_YEAR: 52,
  WORKING_DAYS_PER_WEEK: 5,
  WORKING_HOURS_PER_DAY: 7.5,
};

type NhsScenario = "conservative" | "typical" | "best";

function formatNumber(n: number): string {
  return new Intl.NumberFormat("en-GB").format(n);
}

function formatCurrency(n: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(n);
}

function formatROI(n: number): string {
  return `${n.toFixed(1)}×`;
}

export default function NhsSolutions() {
  const [activeTab, setActiveTab] = useState<"nhs" | "business">("nhs");
  const [value, setValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // NHS-specific state
  const [nhsScenario, setNhsScenario] = useState<NhsScenario>("conservative");

  // Business-specific state
  const [annualSalary, setAnnualSalary] = useState(BUSINESS_CONSTANTS.DEFAULT_ANNUAL_SALARY);
  const [hoursLostPerMonth, setHoursLostPerMonth] = useState(BUSINESS_CONSTANTS.DEFAULT_HOURS_LOST_PER_MONTH);

  // Map slider (0-100) to number of patients/employees
  // NHS: 0 - 50,000 patients | Business: 0 - 10,000 employees
  const maxValue = activeTab === "nhs" ? 50000 : 10000;
  const headlineNumber = useMemo(() => Math.round((value / 100) * maxValue), [value, maxValue]);

  // ============================================
  // NHS CALCULATIONS
  // ============================================
  const nhsCalculations = useMemo(() => {
    const N = headlineNumber;
    const scenario = NHS_CONSTANTS.scenarios[nhsScenario];

    // Patients affected = engaged users
    const patients_affected = Math.round(N * NHS_CONSTANTS.ENGAGEMENT_RATE);

    // Per-user saving calculation
    const per_user_saving =
      NHS_CONSTANTS.DIRECT_SAVING_PER_USER +
      (scenario.HOURS_SAVED_PER_USER * NHS_CONSTANTS.CLINICIAN_RATE) +
      scenario.DEFLECTION_SAVING_PER_USER +
      scenario.RX_SAVING_PER_USER;

    // Annualised cost saving
    const annualised_cost_saving = N * per_user_saving;

    // Programme cost and ROI
    const programme_cost = N * NHS_CONSTANTS.CERINA_COST_PER_USER;
    const roi = programme_cost > 0 ? annualised_cost_saving / programme_cost : 0;

    return {
      patients_affected,
      annualised_cost_saving,
      roi,
      per_user_saving,
    };
  }, [headlineNumber, nhsScenario]);

  // ============================================
  // BUSINESS CALCULATIONS
  // ============================================
  const businessCalculations = useMemo(() => {
    const E = headlineNumber;

    // Employees affected
    const employees_affected = Math.round(E * BUSINESS_CONSTANTS.AFFECTED_RATE);

    // Users on Cerina (affected * adoption rate)
    const users_on_cerina = employees_affected * BUSINESS_CONSTANTS.ADOPTION_RATE;

    // Hourly rate from annual salary
    const hourly_rate = annualSalary / (
      BUSINESS_CONSTANTS.WORKING_WEEKS_PER_YEAR *
      BUSINESS_CONSTANTS.WORKING_DAYS_PER_WEEK *
      BUSINESS_CONSTANTS.WORKING_HOURS_PER_DAY
    );

    // Annual hours recovered per user
    const annual_hours_recovered_per_user =
      hoursLostPerMonth * 12 * BUSINESS_CONSTANTS.REDUCTION_RATE;

    // Per user productivity value
    const per_user_productivity_value = annual_hours_recovered_per_user * hourly_rate;

    // Annualised cost saving
    const annualised_cost_saving = users_on_cerina * per_user_productivity_value;

    // Programme cost and ROI
    const programme_cost = users_on_cerina * BUSINESS_CONSTANTS.CERINA_COST_PER_USER;
    const roi = programme_cost > 0 ? annualised_cost_saving / programme_cost : 0;

    return {
      employees_affected,
      annualised_cost_saving,
      roi,
      users_on_cerina,
    };
  }, [headlineNumber, annualSalary, hoursLostPerMonth]);

  // Get current stats based on active tab
  const currentStats = useMemo(() => {
    if (activeTab === "nhs") {
      return {
        affected: nhsCalculations.patients_affected,
        saving: nhsCalculations.annualised_cost_saving,
        roi: nhsCalculations.roi,
      };
    } else {
      return {
        affected: businessCalculations.employees_affected,
        saving: businessCalculations.annualised_cost_saving,
        roi: businessCalculations.roi,
      };
    }
  }, [activeTab, nhsCalculations, businessCalculations]);

  // Slider background gradient for filled track
  const sliderBackground = `linear-gradient(90deg, #111 0%, #111 ${value}%, #ffffff ${value}%, #ffffff 100%)`;

  // Methodology/tooltip text (single-source sentence per design)
  const methodologyText =
    "Estimates based on leading industry and academic data from Deloitte, Health and Safety Executive and peer reviewed studies.";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      if (isDragging && sliderRef.current) {
        setHasDragged(true);
        const rect = sliderRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.min(Math.max(x / rect.width, 0), 1);
        setValue(percentage * 100);
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (!hasDragged && sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.min(Math.max(x / rect.width, 0), 1);
        setValue(percentage * 100);
      }
      setIsDragging(false);
      setHasDragged(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, hasDragged]);

  // Touch event handlers for mobile
  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && sliderRef.current && e.touches[0]) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const percentage = Math.min(Math.max(x / rect.width, 0), 1);
        setValue(percentage * 100);
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      setHasDragged(false);
    };

    if (isDragging) {
      document.addEventListener("touchmove", handleTouchMove, { passive: true });
      document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <section className="w-full bg-[#D9C28F]/72 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-4 relative">
        {/* Mobile Info Button */}
        <div className="flex justify-end mb-4 block md:hidden">
          <div className="group relative">
            <button
              aria-label="More information about estimates"
              aria-describedby="nhs-estimates-tooltip-small"
              className="w-10 h-10 rounded-full bg-white/60 border border-white flex items-center justify-center focus:outline-none"
            >
              <Image src="/home_page/info.svg" alt="info" width={20} height={20} />
            </button>

            <div
              id="nhs-estimates-tooltip-small"
              role="status"
              className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-4 min-w-[200px] sm:min-w-[300px] z-10"
            >
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-opacity duration-150 flex items-center justify-center bg-black text-white rounded-md px-3 py-2 shadow-lg">
                <div
                  className="font-normal"
                  style={{
                    fontSize: "clamp(10px, 1.5vw, 12px)",
                    lineHeight: "140%",
                    color: "#FFFFFF",
                  }}
                >
                  {methodologyText}
                </div>
                <div
                  aria-hidden
                  className="w-0 h-0 border-[8px] border-transparent border-l-black absolute right-[-14px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-1 bg-white/50 rounded-full p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("nhs")}
              className={`px-4 py-2 rounded-full transition font-medium cursor-pointer ${
                activeTab === "nhs"
                  ? "bg-[#DDC7A3] text-[#111] shadow-inner"
                  : "text-[#6b6b6b] bg-white/0"
              }`}
              style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
            >
              NHS solutions
            </button>

            <button
              onClick={() => setActiveTab("business")}
              className={`px-3 py-1.5 rounded-full transition font-medium cursor-pointer ${
                activeTab === "business"
                  ? "bg-[#DDC7A3] text-[#111] shadow-inner"
                  : "text-[#6b6b6b] bg-white/0"
              }`}
              style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
            >
              Business solutions
            </button>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-6">
          <h3
            className="font-medium text-[#111] mb-3"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              lineHeight: "1.26",
              letterSpacing: "-0.96px",
              textAlign: "center",
            }}
          >
            How much can Cerina save your organisation?
          </h3>

          <div
            className="font-medium text-[#121212] mb-1"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 3rem)",
              lineHeight: "1.26",
              textAlign: "center",
            }}
          >
            {formatNumber(headlineNumber)}
          </div>

          <p
            className="font-normal text-[#2b2b2b]"
            style={{
              fontSize: "clamp(1rem, 3vw, 1.5rem)",
              lineHeight: "1.26",
              letterSpacing: "-0.96px",
              textAlign: "center",
            }}
          >
            {activeTab === "business" ? "Number of employees" : "Number of patients"}
          </p>
        </div>

        {/* Slider */}
        <div className="my-8">
          <div className="w-full px-4">
            <div
              className="relative flex items-center cursor-pointer select-none"
              ref={sliderRef}
              onMouseDown={(e) => {
                e.preventDefault(); // Prevent text selection
                setIsDragging(true);
                setHasDragged(false);
                // Immediately update value on first click
                if (sliderRef.current) {
                  const rect = sliderRef.current.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const percentage = Math.min(Math.max(x / rect.width, 0), 1);
                  setValue(percentage * 100);
                }
              }}
              onTouchStart={(e) => {
                setIsDragging(true);
                setHasDragged(false);
                // Immediately update value on first touch
                if (sliderRef.current && e.touches[0]) {
                  const rect = sliderRef.current.getBoundingClientRect();
                  const x = e.touches[0].clientX - rect.left;
                  const percentage = Math.min(Math.max(x / rect.width, 0), 1);
                  setValue(percentage * 100);
                }
              }}
            >
              {/* Track background */}
              <div
                className="w-full h-3 rounded-full"
                style={{ background: sliderBackground }}
              />

              {/* Thumb indicator */}
              <div
                aria-hidden
                style={{ left: `calc(${value}% - 18px)` }}
                className="absolute top-1/2 -translate-y-1/2 w-9 h-9 pointer-events-none"
              >
                <svg width="36" height="36" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                  <rect x="3.7" y="2.7" width="38" height="38" rx="19" fill="#121212"/>
                  <path d="M19.7 16.7L14.7 21.7L19.7 26.7M25.7 16.7L30.7 21.7L25.7 26.7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Hidden native input for accessibility */}
              <input
                aria-label={activeTab === "business" ? "employees slider" : "patients slider"}
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="sr-only"
              />
            </div>
          </div>
        </div>

        {/* NHS Scenario Selector */}
        {activeTab === "nhs" && (
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/30 rounded-full p-1">
              <button
                onClick={() => setNhsScenario("conservative")}
                className={`px-3 py-1.5 rounded-full transition text-sm font-medium cursor-pointer ${
                  nhsScenario === "conservative"
                    ? "bg-white text-[#111] shadow-sm"
                    : "text-[#6b6b6b]"
                }`}
              >
                Conservative
              </button>
              <button
                onClick={() => setNhsScenario("typical")}
                className={`px-3 py-1.5 rounded-full transition text-sm font-medium cursor-pointer ${
                  nhsScenario === "typical"
                    ? "bg-white text-[#111] shadow-sm"
                    : "text-[#6b6b6b]"
                }`}
              >
                Typical
              </button>
              <button
                onClick={() => setNhsScenario("best")}
                className={`px-3 py-1.5 rounded-full transition text-sm font-medium cursor-pointer ${
                  nhsScenario === "best"
                    ? "bg-white text-[#111] shadow-sm"
                    : "text-[#6b6b6b]"
                }`}
              >
                Best case
              </button>
            </div>
          </div>
        )}

        {/* Business User Inputs */}
        {activeTab === "business" && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-6 px-4">
            <div className="flex flex-col items-center sm:items-start">
              <label
                htmlFor="annual-salary"
                className="text-sm font-medium text-[#2b2b2b] mb-2"
              >
                Average annual salary (£)
              </label>
              <input
                id="annual-salary"
                type="number"
                min={0}
                value={annualSalary}
                onChange={(e) => setAnnualSalary(Math.max(0, Number(e.target.value)))}
                className="w-full sm:w-40 px-3 py-2 rounded-lg border border-[#ccc] bg-white text-[#111] text-center font-medium"
                style={{ fontSize: "1rem" }}
              />
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <label
                htmlFor="hours-lost"
                className="text-sm font-medium text-[#2b2b2b] mb-2"
              >
                Hours lost per affected/month
              </label>
              <input
                id="hours-lost"
                type="number"
                min={0}
                max={160}
                value={hoursLostPerMonth}
                onChange={(e) => setHoursLostPerMonth(Math.max(0, Math.min(160, Number(e.target.value))))}
                className="w-full sm:w-40 px-3 py-2 rounded-lg border border-[#ccc] bg-white text-[#111] text-center font-medium"
                style={{ fontSize: "1rem" }}
              />
            </div>
          </div>
        )}

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center">
          <div>
            <div
              className="font-medium text-[#121212] mb-2"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 3rem)",
                lineHeight: "50.4px",
                textAlign: "center",
              }}
            >
              {formatNumber(currentStats.affected)}
            </div>
            <div
              className="font-normal text-[#2b2b2b]"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                lineHeight: "100%",
                letterSpacing: "0px",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              {activeTab === "business"
                ? "Estimated number of employees affected"
                : "Estimated number of patients affected"}
            </div>
          </div>

          <div>
            <div
              className="font-medium text-[#121212] mb-2"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 3rem)",
                lineHeight: "50.4px",
                textAlign: "center",
              }}
            >
              {formatCurrency(Math.round(currentStats.saving))}
            </div>
            <div
              className="font-normal text-[#2b2b2b]"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                lineHeight: "100%",
                letterSpacing: "0px",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              Annualised cost saving (GBP)
            </div>
          </div>

          <div>
            <div
              className="font-medium text-[#121212] mb-2"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 3rem)",
                lineHeight: "50.4px",
                textAlign: "center",
              }}
            >
              {formatROI(currentStats.roi)}
            </div>
            <div
              className="font-normal text-[#2b2b2b]"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                lineHeight: "100%",
                letterSpacing: "0px",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              Estimated ROI (indicative)
            </div>
          </div>
        </div>

        {/* Desktop Info Button with Methodology Tooltip */}
        <div className="absolute right-4 top-4 hidden md:flex">
          <div className="group relative">
            <button
              aria-label="More information about estimates"
              aria-describedby="nhs-estimates-tooltip"
              className="w-10 h-10 rounded-full bg-white/60 border border-white flex items-center justify-center focus:outline-none"
            >
              <Image src="/home_page/info.svg" alt="info" width={20} height={20} />
            </button>

            <div
              id="nhs-estimates-tooltip"
              role="status"
              className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-4 min-w-[280px] sm:min-w-[350px] z-10"
            >
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-opacity duration-150 bg-black text-white rounded-md px-4 py-3 shadow-lg relative">
                <div
                  className="font-normal"
                  style={{
                    fontSize: "clamp(11px, 1.5vw, 13px)",
                    lineHeight: "150%",
                    color: "#FFFFFF",
                  }}
                >
                  {methodologyText}
                </div>
                <div
                  aria-hidden
                  className="w-0 h-0 border-[8px] border-transparent border-l-black absolute right-[-14px] top-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
