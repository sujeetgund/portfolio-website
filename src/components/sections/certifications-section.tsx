import { certificationsData } from "@/lib/data";
import { formatMonthYear } from "@/lib/date-utils";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CertificationsSection() {
  return (
    <Section id="certifications">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
        <SectionHeader title="Certifications" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <Link
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#ffffff] border border-[#cccccc] p-[24px] rounded-[2px] hover:border-[#76b900] transition-colors relative"
            >
              <div className="absolute top-0 right-0 w-[12px] h-[12px] bg-transparent group-hover:bg-[#76b900] transition-colors rounded-tr-[2px]" />
              <h3 className="text-[17px] font-bold leading-[1.47] text-[#1a1a1a] mb-2 m-0 group-hover:text-[#76b900] transition-colors">
                {cert.name}
              </h3>
              <p className="text-[15px] font-normal leading-[1.67] text-[#757575] m-0 mb-4">
                Issued by {cert.issuer}
              </p>
              <div className="text-[#0046a4] font-normal text-[15px] inline-flex items-center group-hover:underline">
                View Credential
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
