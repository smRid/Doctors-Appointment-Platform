"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { PricingTable } from "@clerk/nextjs";

const Pricing = () => {
  return (
    <Card className="border-emerald-900/30 shadow-lg bg-gradient-to-b from-emerald-950/30 to-transparent">
      <CardContent className="p-6 md:p-8">        <PricingTable
          appearance={{
            baseTheme: "dark",
            variables: {
              colorPrimary: "#10b981",
              colorBackground: "#111827", // Gray-900
              colorText: "#f9fafb", // Gray-50
              fontFamily: "inherit",
              colorBackgroundHover: "#1f2937", // Gray-800
            },
            elements: {
              card: {
                backgroundColor: "#1f2937", // Gray-800
                border: "2px solid #374151", // Gray-700
                borderRadius: "12px",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                padding: "24px",
                margin: "0px 12px",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#10b981",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }
              },
              header: {
                color: "#f9fafb", // Gray-50
                fontWeight: "700",
                fontSize: "1.25rem",
                marginBottom: "12px"
              },
              priceAmount: {
                color: "#ffffff",
                fontWeight: "800",
                fontSize: "2rem"
              },
              button: {
                backgroundColor: "#10b981",
                color: "#ffffff",
                borderRadius: "6px",
                fontSize: "1rem",
                fontWeight: "600",
                padding: "12px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              },
              featureText: {
                color: "#d1d5db", // Gray-300
              },
              badge: {
                backgroundColor: "#10b981",
                color: "#ffffff"
              }
            }
          }}
          checkoutProps={{
            appearance: {
              elements: {
                drawerRoot: {
                  zIndex: 2000,
                },
                button: {
                  backgroundColor: "#10b981",
                  color: "#ffffff",
                },
                input: {
                  backgroundColor: "#374151", // Gray-700
                  border: "1px solid #4B5563", // Gray-600
                  borderRadius: "6px"
                }
              },
              variables: {
                colorPrimary: "#10b981",
                colorBackground: "#1f2937", // Gray-800
                colorText: "#f9fafb", // Gray-50
              }
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default Pricing;