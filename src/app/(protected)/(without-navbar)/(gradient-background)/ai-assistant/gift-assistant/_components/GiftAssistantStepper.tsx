'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { steps } from "./GiftAssistantSteps";
import { Check } from "lucide-react";

export default function GiftAssistantStepper() {

      const [activeStep, setActiveStep] = useState(0);
      const handleNext = () => {
        if (activeStep < steps.length - 1) {
          setActiveStep((prev) => prev + 1);
        }
      };
    
      const handleBack = () => {
        if (activeStep > 0) {
          setActiveStep((prev) => prev - 1);
        }
      };
    
      const handleReset = () => {
        setActiveStep(0);
      };
  return (
    <div className="w-full h-[92%] max-w-3xl mx-auto md:p-8 flex flex-col justify-start gap-12">
      {/* Stepper Header */}
      <div className="relative flex items-center justify-between w-full">
        {/* Background Connector Line */}
        <div
          className="absolute h-0.5 bg-border"
          style={{ left: "16.67%", right: "16.67%", top: "18px" }}
        />

        {/* Animated Active/Completed Progress Line */}
        <motion.div
          className="absolute h-0.5 bg-gradient origin-right"
          style={{ left: "16.67%", right: "16.67%", top: "18px" }}
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: activeStep / (steps.length - 1),
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />

        {steps.map((step, idx) => {
          const isCompleted = idx < activeStep;
          const isActive = idx === activeStep;
          return (
            <div
              key={step.title}
              className="flex flex-col items-center flex-1 relative group cursor-pointer"
              onClick={() => setActiveStep(idx)}
            >
              {/* Step Icon Box */}
              <motion.div
                className={cn(
                  "w-9 h-9 flex items-center justify-center rounded-lg text-sm font-semibold transition-colors duration-300 shadow-sm relative z-10",
                  isCompleted || isActive
                    ? "bg-gradient text-primary-foreground rounded-full"
                    : "bg-muted text-muted-foreground"
                )}
                animate={{
                  scale: isActive ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" strokeWidth={2.5} />
                ) : (
                  <step.icon className="w-5 h-5" />
                )}
              </motion.div>

              {/* Step Labels */}
              <div className="mt-3 text-center space-y-1 px-2 select-none">
                <p
                  className={cn(
                    "text-sm font-medium transition-colors duration-300 ",
                    isActive || isCompleted
                      ? "text-gradient font-semibold"
                      : "text-muted-foreground"
                  )}
                >
                  {step.title}
                </p>
                {/* <p
                  className={cn(
                    "text-xs transition-colors duration-300 hidden sm:block",
                    isActive || isCompleted
                      ? "text-muted-foreground"
                      : "text-muted-foreground/50"
                  )}
                >
                  {step.description}
                </p> */}
              </div>
            </div>
          );
        })}
      </div>

      {/* Divider */}
      {/* <hr className="border-border/50" /> */}

      {/* Stepper Content Area with animations */}
      <div className="flex flex-col justify-center items-center text-center overflow-auto hide-scrollbar mb-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full px-6 sm:px-2"
          >
              {steps[activeStep].contentNode}
            
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Stepper Footer Controls */}
      <div className="flex justify-center items-center w-full pt-2">
        

        <div className="flex items-center gap-2 w-full">
          {activeStep === steps.length - 1 ? (
            <Button
              onClick={handleReset}
              variant={"gradient"}
              className="w-full"
            >
              شروع جستجو
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              variant={"gradient"}
              className="w-full"
            >
              بعدی
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
