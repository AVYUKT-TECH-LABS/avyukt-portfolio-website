"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { X, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { sectors } from "@/constants";
import { sendGTMEvent } from "@next/third-parties/google";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  projectDetails: string;
  budget: string;
  timeline: string;
  phone: string;
  contactMethod: string;
  companyName: string;
  industry: string;
  additionalInfo: string;
}

// Define EmailJS configuration type
interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

// EmailJS configuration - replace with your actual values
const emailJSConfig: EmailJSConfig = {
  serviceId: "service_sol1htd",
  templateId: "template_odo02fj",
  publicKey: "bkSFddeD7-g26cgAk",
};

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "",
    projectDetails: "",
    budget: "",
    timeline: "",
    phone: "",
    contactMethod: "",
    companyName: "",
    industry: "",
    additionalInfo: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailJSError, setEmailJSError] = useState<string | null>(null);

  // Auto-open popup after 5 seconds (can be adjusted)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const totalSteps = 4;

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {};

    if (step === 1) {
      if (!formData.projectType)
        newErrors.projectType = "Please select a project type";
      if (!formData.industry)
        newErrors.industry = "Please select your industry";
    } else if (step === 2) {
      if (!formData.projectDetails)
        newErrors.projectDetails = "Please provide some project details";
      if (!formData.budget) newErrors.budget = "Please select a budget range";
      if (!formData.timeline) newErrors.timeline = "Please select a timeline";
    } else if (step === 3) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.companyName)
        newErrors.companyName = "Company name is required";
      if (!formData.contactMethod)
        newErrors.contactMethod = "Please select a preferred contact method";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (): void => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrevious = (): void => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (name: string, value: string): void => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user selects
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (): Promise<void> => {
    if (validateStep(currentStep)) {
      setIsSubmitting(true);
      setEmailJSError(null);

      try {
        // Create a template params object that matches your EmailJS template variables
        const templateParams = {
          user_name: formData.name,
          user_email: formData.email,
          company_name: formData.companyName,
          project_type: formData.projectType,
          industry: formData.industry,
          project_details: formData.projectDetails,
          budget: formData.budget,
          timeline: formData.timeline,
          phone: formData.phone,
          contact_method: formData.contactMethod,
          additional_info: formData.additionalInfo,
        };

        // Send email using EmailJS
        const response = await emailjs.send(
          emailJSConfig.serviceId,
          emailJSConfig.templateId,
          templateParams,
          emailJSConfig.publicKey
        );

        // console.log("Email sent successfully:", response);
        setIsSubmitted(true);
        sendGTMEvent({
          event: "lead",
          value: {
            send_to: "AW-17025867407/fC5yCKL_mb8aEI-9yLY_",
          },
        });

        // Reset form after successful submission
        setTimeout(() => {
          setIsOpen(false);
          setIsSubmitted(false);
          setCurrentStep(1);
          setFormData({
            name: "",
            email: "",
            projectType: "",
            projectDetails: "",
            budget: "",
            timeline: "",
            phone: "",
            contactMethod: "",
            companyName: "",
            industry: "",
            additionalInfo: "",
          });
        }, 3000);
      } catch (error) {
        console.error("Error submitting form:", error);
        setEmailJSError("Failed to send your request. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#134A45] px-10 py-4 text-white rounded-lg font-semibold transition duration-400 group md:w-1/2 w-full flex items-center justify-center"
      >
        <span className="flex flex-row items-center justify-center space-x-3 w-full">
          <span>Contact Us</span>
        </span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white w-full max-w-lg rounded-lg p-3 shadow-xl md:max-w-3xl grid grid-cols-2 gap-x-4">
        <div className="bg-green-400/60 rounded-lg">
          <Image
            className="h-[100%] w-[100%]"
            src="/img/cover-pic.svg"
            alt="AVYUKT TECH LABS"
            width={400}
            height={600}
            priority
          />
        </div>
        <div className="">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>

          {!isSubmitted ? (
            <>
              <Image
                className="mb-4"
                src="/img/logo-new-cropped.webp"
                alt="AVYUKT TECH LABS"
                width={40}
                height={40}
                priority
              />
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">
                    {currentStep === 1 && "What are you looking for?"}
                    {currentStep === 2 && "What's your idea?"}
                    {currentStep === 3 && "How can we reach out to you?"}
                    {currentStep === 4 && "Any other information?"}
                  </h2>
                  {/* <div className="text-sm text-gray-500">
                  Step {currentStep} of {totalSteps}
                </div> */}
                </div>

                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full bg-[#134A45] transition-all duration-300"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  ></div>
                </div>
              </div>

              {emailJSError && (
                <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  {emailJSError}
                </div>
              )}

              <form ref={formRef} className="min-h-[320px]">
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>
                        Project Type <span className="text-red-500">*</span>
                      </Label>
                      <RadioGroup
                        value={formData.projectType}
                        onValueChange={(value) =>
                          handleSelectChange("projectType", value)
                        }
                        className={cn(
                          "space-y-2",
                          errors.projectType && "border-red-500"
                        )}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="web" id="web" />
                          <Label htmlFor="web">Website Development</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mobile" id="mobile" />
                          <Label htmlFor="mobile">Mobile App Development</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="both" id="both" />
                          <Label htmlFor="both">Both Web & Mobile</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other Digital Solution</Label>
                        </div>
                      </RadioGroup>
                      {errors.projectType && (
                        <p className="text-xs text-red-500">
                          {errors.projectType}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">
                        Industry <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) =>
                          handleSelectChange("industry", value)
                        }
                      >
                        <SelectTrigger
                          className={cn(errors.industry && "border-red-500")}
                        >
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {sectors.map((sector, idx) => (
                            <SelectItem
                              key={idx}
                              value={sector.title.toLowerCase()}
                            >
                              {sector.title}
                            </SelectItem>
                          ))}
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.industry && (
                        <p className="text-xs text-red-500">
                          {errors.industry}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectDetails">
                        Project Details <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="projectDetails"
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleChange}
                        placeholder="Please describe your project requirements..."
                        className={cn(
                          "min-h-[100px]",
                          errors.projectDetails && "border-red-500"
                        )}
                      />
                      {errors.projectDetails && (
                        <p className="text-xs text-red-500">
                          {errors.projectDetails}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">
                        Budget Range <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          handleSelectChange("budget", value)
                        }
                      >
                        <SelectTrigger
                          className={cn(errors.budget && "border-red-500")}
                        >
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under5k">Under ₹10,000</SelectItem>
                          <SelectItem value="5k-10k">
                            ₹10,000 - ₹15,000
                          </SelectItem>
                          <SelectItem value="10k-25k">
                            ₹15,000 - ₹25,000
                          </SelectItem>
                          <SelectItem value="25k-50k">
                            ₹25,000 - ₹50,000
                          </SelectItem>
                          <SelectItem value="50k-100k">
                            ₹50,000 - ₹100,000
                          </SelectItem>
                          <SelectItem value="over100k">
                            Over ₹100,000
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.budget && (
                        <p className="text-xs text-red-500">{errors.budget}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">
                        Project Timeline <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) =>
                          handleSelectChange("timeline", value)
                        }
                      >
                        <SelectTrigger
                          className={cn(errors.timeline && "border-red-500")}
                        >
                          <SelectValue placeholder="Select your timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">
                            As soon as possible
                          </SelectItem>
                          <SelectItem value="1month">Within 1 month</SelectItem>
                          <SelectItem value="3months">
                            Within 3 months
                          </SelectItem>
                          <SelectItem value="6months">
                            Within 6 months
                          </SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.timeline && (
                        <p className="text-xs text-red-500">
                          {errors.timeline}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <>
                    <div className="space-y-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={cn(errors.name && "border-red-500")}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={cn(errors.email && "border-red-500")}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500">{errors.email}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="companyName">
                          Company Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Acme Inc."
                          className={cn(errors.companyName && "border-red-500")}
                        />
                        {errors.companyName && (
                          <p className="text-xs text-red-500">
                            {errors.companyName}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className={cn(errors.phone && "border-red-500")}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-500">{errors.phone}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label>
                          Preferred Contact Method{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <RadioGroup
                          value={formData.contactMethod}
                          onValueChange={(value) =>
                            handleSelectChange("contactMethod", value)
                          }
                          className={cn(
                            "space-y-2",
                            errors.contactMethod && "border-red-500"
                          )}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="email" id="email-contact" />
                            <Label htmlFor="email-contact">Email</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="phone" id="phone-contact" />
                            <Label htmlFor="phone-contact">Phone</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="whats-app"
                              id="whatsapp-contact"
                            />
                            <Label htmlFor="whatsapp-contact">Whatsapp</Label>
                          </div>
                        </RadioGroup>
                        {errors.contactMethod && (
                          <p className="text-xs text-red-500">
                            {errors.contactMethod}
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">
                        Additional Information
                      </Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        placeholder="Any other details you'd like to share..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <Checkbox id="terms" defaultChecked />
                        <div className="grid gap-1.5 leading-none">
                          <Label
                            htmlFor="terms"
                            className="text-sm font-normal leading-snug text-gray-600"
                          >
                            I agree to receive communications from your company.
                            Your information will be handled as detailed in our
                            Privacy Policy.
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </form>

              <div className="mt-6 flex justify-between">
                {currentStep > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={isSubmitting}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                ) : (
                  <div></div>
                )}

                <Button
                  type="button"
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className="bg-white border border-black text-black hover:border-[#134A45] hover:bg-[#134A45]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Processing...
                    </div>
                  ) : currentStep === totalSteps ? (
                    <>
                      Submit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                Thank You!
              </h2>
              <p className="mb-6 text-gray-600">
                Your information has been submitted successfully. Our sales team
                will contact you shortly.
              </p>
              <Button
                onClick={() => setIsOpen(false)}
                className="bg-white border border-black text-black hover:border-[#134A45] hover:bg-[#134A45]"
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
