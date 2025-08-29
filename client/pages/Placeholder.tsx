import { Link } from "react-router-dom";
import { homework } from "@/data/homework";
import { feeData, studentFeeInfo } from "@/data/fees";
import { teachers } from "@/data/teachers";
import { ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Placeholder({ title }: { title: string }) {
  if (title === "Homework") {
    return (
      <div className="mx-auto max-w-3xl">
        <div className="text-sm text-muted-foreground mb-4">Ch-1</div>
        <div className="divide-y rounded-lg border bg-card">
          {homework.map((item) => (
            <Link
              key={item.id}
              to={item.hasDetails ? `/homework/${item.id}` : "#"}
              className="flex items-start gap-4 p-4 hover:bg-accent/50 transition-colors"
            >
              <img
                src={item.avatar}
                alt={item.teacher}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-foreground">
                    {item.subject}
                  </h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {item.date}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  {item.teacher}
                </div>
                <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
                  {item.content}
                </p>
              </div>
              {item.hasDetails && (
                <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
              )}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (title === "Subject Teachers") {
    return (
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800"
            >
              <div className="aspect-square relative">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold text-sm mb-1">{teacher.name}</h3>
                  <p className="text-xs text-gray-200">{teacher.subject}</p>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                  <Star className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (title === "School Fee") {
    return (
      <div className="mx-auto max-w-3xl">
        {/* Student Info Section */}
        <div className="flex items-center gap-4 mb-6 bg-card p-4 rounded-lg border">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fda7abc3321674c79b9af9ccbd12e77ec%2Faf1c670c6b9b4dd2b4cbec2104ce658b?format=webp&width=100"
            alt="Student"
            className="h-16 w-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{studentFeeInfo.name}</h2>
            <p className="text-sm text-muted-foreground">
              ID: {studentFeeInfo.id}
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">INR0.00</div>
          </div>
        </div>

        {/* Fee Table */}
        <div className="bg-card rounded-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-full">
              <div className="grid grid-cols-5 gap-4 p-4 bg-muted/50 border-b font-medium min-w-[600px]">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>INSTALLMENT ↓</span>
                </div>
                <div className="text-center">FEE</div>
                <div className="text-center">PAID</div>
                <div className="text-center">DUES</div>
                <div></div>
              </div>

              {feeData.map((fee) => (
                <div
                  key={fee.id}
                  className="grid grid-cols-5 gap-4 p-4 border-b last:border-b-0 hover:bg-accent/50 min-w-[600px]"
                >
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>{fee.installment}</span>
                  </div>
                  <div className="text-center">{fee.fee}</div>
                  <div className="text-center">{fee.paid}</div>
                  <div className="text-center font-medium">{fee.dues}</div>
                  <div></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Refund Policy Button */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="text-red-500 border-red-200 hover:bg-red-50"
          >
            Refund Policy
          </Button>
        </div>
      </div>
    );
  }

  if (title === "Principal's Desk") {
    const PRINCIPAL_IMG =
      "https://cdn.builder.io/api/v1/image/assets%2F87cdc21a555b449ead0e398a6201639b%2F0356abbae2b64b0ab8a599cb1148f55f?format=webp&width=800";
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-lg border bg-card p-6 text-center">
          <img
            src={PRINCIPAL_IMG}
            alt="Fr. Armstrong Edison SJ"
            className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
          />
          <h2 className="text-xl font-semibold">Fr. Armstrong Edison SJ</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Principal, St. Xavier's Higher Secondary School
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border bg-card p-6 text-center">
      <p className="text-sm text-muted-foreground">
        This page is ready to be customized. Tell me what to show here and I
        will build it next.
      </p>
      <div className="mt-6">
        <Link className="text-brand hover:underline" to="/">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
