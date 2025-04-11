import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { PhoneCall, Clock, Timer } from "lucide-react";

const callStats = {
  numberOfCalls: 157,
  callDuration: "2h 34m",
  queueWaitTime: "4m 12s"
};

export default function Page() {
  return (
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">John Doe</CardTitle>
          <CardDescription>Customer call statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2">
                  <PhoneCall className="h-5 w-5 text-muted-foreground" />
                  <h3 className="text-sm font-medium">Number of Calls</h3>
                </div>
                <div className="mt-4">
                  <p className="text-3xl font-bold">
                    {callStats.numberOfCalls}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <h3 className="text-sm font-medium">Call Duration</h3>
                </div>
                <div className="mt-4">
                  <p className="text-3xl font-bold">{callStats.callDuration}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2">
                  <Timer className="h-5 w-5 text-muted-foreground" />
                  <h3 className="text-sm font-medium">Queue Wait Time</h3>
                </div>
                <div className="mt-4">
                  <p className="text-3xl font-bold">
                    {callStats.queueWaitTime}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
