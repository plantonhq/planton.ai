'use client'

import React, { useState } from "react";
import { DemoStep } from "@/lib/entities";
import { Button } from "@/app/components/tour/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export default function TestApiPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const testApiCall = async () => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      console.log("🧪 Testing API call...");
      const steps = await DemoStep.list("-step_number");
      console.log("✅ API call successful:", steps);
      setResult(steps);
    } catch (err) {
      console.error("❌ API call failed:", err);
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-600 to-pink-500 flex items-center justify-center p-8">
      <Card className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            API Test Page
          </h1>
          
          <div className="space-y-6">
            <Button 
              onClick={testApiCall} 
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold"
            >
              {isLoading ? "Testing..." : "Test API Call"}
            </Button>

            {isLoading && (
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-2"></div>
                <p className="text-gray-600">Making API call...</p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="text-red-800 font-semibold mb-2">Error:</h3>
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {result && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-green-800 font-semibold mb-2">Success!</h3>
                <p className="text-green-700 mb-2">API call returned {result.length} items</p>
                <details className="text-sm text-green-700">
                  <summary className="cursor-pointer font-medium">View Response</summary>
                  <pre className="mt-2 bg-white p-2 rounded border overflow-auto max-h-64">
                    {JSON.stringify(result, null, 2)}
                  </pre>
                </details>
              </div>
            )}

            <div className="text-center text-sm text-gray-500">
              <p>Check the browser console for detailed logs</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
