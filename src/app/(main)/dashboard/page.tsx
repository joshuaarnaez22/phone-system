"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Clock,
  Timer,
  TrendingUp,
  TrendingDown,
  Users,
  BarChart3,
  CheckCircle
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Page() {
  // Sample data - replace with your actual data
  const customerName = "Demo App";
  const timeRange = "This Month";
  const callStats = {
    numberOfCalls: 157,
    callDuration: "2h 34m",
    queueWaitTime: "4m 12s",
    successRate: 92,
    callsLastPeriod: 143,
    callTypes: {
      support: 78,
      sales: 45,
      billing: 34
    },
    agentPerformance: {
      averageHandlingTime: "8m 12s",
      firstCallResolution: 76
    }
  };

  const [selectedTimeRange, setSelectedTimeRange] = useState(timeRange);

  // Calculate if calls increased or decreased from last period
  const callsChange = callStats.numberOfCalls - callStats.callsLastPeriod;
  const callsChangePercent = Math.round(
    (callsChange / callStats.callsLastPeriod) * 100
  );
  const isCallsIncreased = callsChange > 0;

  return (
    <main className="container mx-auto py-10 px-4">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">{customerName}</h1>
            <p className="text-muted-foreground">Customer Call Analytics</p>
          </div>
          <Select
            value={selectedTimeRange}
            onValueChange={setSelectedTimeRange}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Today">Today</SelectItem>
              <SelectItem value="This Week">This Week</SelectItem>
              <SelectItem value="This Month">This Month</SelectItem>
              <SelectItem value="Last Quarter">Last Quarter</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Call Details</TabsTrigger>
            <TabsTrigger value="agents">Agent Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Number of Calls</CardDescription>
                  <CardTitle className="text-3xl">
                    {callStats.numberOfCalls}
                    <span
                      className={`ml-2 text-sm ${
                        isCallsIncreased ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {isCallsIncreased ? (
                        <TrendingUp className="inline h-4 w-4 mr-1" />
                      ) : (
                        <TrendingDown className="inline h-4 w-4 mr-1" />
                      )}
                      {Math.abs(callsChangePercent)}%
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    Compared to {callStats.callsLastPeriod} calls last period
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Average Call Duration</CardDescription>
                  <CardTitle className="text-3xl">
                    {callStats.callDuration}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Per customer interaction
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Queue Wait Time</CardDescription>
                  <CardTitle className="text-3xl">
                    {callStats.queueWaitTime}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    <Timer className="inline h-4 w-4 mr-1" />
                    Average wait before connection
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Success Rate</CardDescription>
                  <CardTitle className="text-3xl">
                    {callStats.successRate}%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={callStats.successRate} className="h-2" />
                  <div className="mt-1 text-xs text-muted-foreground">
                    <CheckCircle className="inline h-4 w-4 mr-1" />
                    Issues resolved on first call
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call Type Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Call Type Breakdown</CardTitle>
                <CardDescription>
                  Distribution of calls by category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Support</span>
                      <span className="text-sm font-medium">
                        {callStats.callTypes.support} calls
                      </span>
                    </div>
                    <Progress
                      value={
                        (callStats.callTypes.support /
                          callStats.numberOfCalls) *
                        100
                      }
                      className="h-2 bg-slate-200"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Sales</span>
                      <span className="text-sm font-medium">
                        {callStats.callTypes.sales} calls
                      </span>
                    </div>
                    <Progress
                      value={
                        (callStats.callTypes.sales / callStats.numberOfCalls) *
                        100
                      }
                      className="h-2 bg-slate-200"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Billing</span>
                      <span className="text-sm font-medium">
                        {callStats.callTypes.billing} calls
                      </span>
                    </div>
                    <Progress
                      value={
                        (callStats.callTypes.billing /
                          callStats.numberOfCalls) *
                        100
                      }
                      className="h-2 bg-slate-200"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="details">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Call Analytics</CardTitle>
                <CardDescription>
                  Comprehensive view of call metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-medium mb-2">
                        Call Volume Trends
                      </h3>
                      <div className="h-[200px] bg-slate-100 rounded-md flex items-center justify-center">
                        <BarChart3 className="h-16 w-16 text-slate-400" />
                        <span className="ml-2 text-slate-500">
                          Call volume chart would appear here
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">
                        Peak Call Hours
                      </h3>
                      <div className="h-[200px] bg-slate-100 rounded-md flex items-center justify-center">
                        <Clock className="h-16 w-16 text-slate-400" />
                        <span className="ml-2 text-slate-500">
                          Peak hours chart would appear here
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Call Duration Distribution
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="bg-slate-100 p-4 rounded-md">
                        <div className="text-2xl font-bold">23%</div>
                        <div className="text-sm text-muted-foreground">
                          &lt; 2 min
                        </div>
                      </div>
                      <div className="bg-slate-100 p-4 rounded-md">
                        <div className="text-2xl font-bold">45%</div>
                        <div className="text-sm text-muted-foreground">
                          2-5 min
                        </div>
                      </div>
                      <div className="bg-slate-100 p-4 rounded-md">
                        <div className="text-2xl font-bold">27%</div>
                        <div className="text-sm text-muted-foreground">
                          5-10 min
                        </div>
                      </div>
                      <div className="bg-slate-100 p-4 rounded-md">
                        <div className="text-2xl font-bold">5%</div>
                        <div className="text-sm text-muted-foreground">
                          &gt; 10 min
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="agents">
            <Card>
              <CardHeader>
                <CardTitle>Agent Performance</CardTitle>
                <CardDescription>
                  Metrics for customer service representatives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Average Handling Time</CardDescription>
                        <CardTitle>
                          {callStats.agentPerformance.averageHandlingTime}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm text-muted-foreground">
                          Time spent on each customer interaction
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>First Call Resolution</CardDescription>
                        <CardTitle>
                          {callStats.agentPerformance.firstCallResolution}%
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Progress
                          value={callStats.agentPerformance.firstCallResolution}
                          className="h-2"
                        />
                        <div className="mt-1 text-sm text-muted-foreground">
                          Issues resolved without follow-up
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Top Performing Agents
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-slate-50 rounded-md">
                        <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center mr-4">
                          <Users className="h-5 w-5 text-slate-500" />
                        </div>
                        <div>
                          <div className="font-medium">Sarah Johnson</div>
                          <div className="text-sm text-muted-foreground">
                            42 calls • 96% success rate
                          </div>
                        </div>
                        <div className="ml-auto">
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Top Performer
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center p-3 bg-slate-50 rounded-md">
                        <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center mr-4">
                          <Users className="h-5 w-5 text-slate-500" />
                        </div>
                        <div>
                          <div className="font-medium">Michael Chen</div>
                          <div className="text-sm text-muted-foreground">
                            38 calls • 92% success rate
                          </div>
                        </div>
                        <div className="ml-auto">
                          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                            Rising Star
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
