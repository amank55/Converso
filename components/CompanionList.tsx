"use client";

import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const recentSessions = [
  {
    name: "Neura the Brainy Explorer",
    topic: "Neural Network of the Brain",
    subject: "Science",
    duration: "45 mins",
    icon: "/icons/science.svg",
    color: "#FFDA6E",
  },
  {
    name: "Countsy the Number Wizard",
    topic: "Derivatives & Integrals",
    subject: "Maths",
    duration: "30 mins",
    icon: "/icons/maths.svg",
    color: "#E5D0FF",
  },
  {
    name: "Verba the Vocabulary Builder",
    topic: "English Literature",
    subject: "Language",
    duration: "30 mins",
    icon: "/icons/language.svg",
    color: "#BDE7FF",
  },
  {
    name: "Codey the Logic Hacker",
    topic: "Intro to If-Else Statements",
    subject: "Coding",
    duration: "45 mins",
    icon: "/icons/coding.svg",
    color: "#F1F1F1",
  },
  {
    name: "Memo, the Memory Keeper",
    topic: "World Wars: Causes & Consequences",
    subject: "History",
    duration: "15 mins",
    icon: "/icons/history.svg",
    color: "#FFF3CD",
  },
  {
    name: "The Market Maestro",
    topic: "The Basics of Supply & Demand",
    subject: "Economics",
    duration: "10 mins",
    icon: "/icons/economics.svg",
    color: "#D4EDDA",
  },
];

export default function RecentSessionsTable() {
  return (
    <div className="flex gap-6 items-start mt-10">
      {/* Recent Sessions Table (60% width) */}
      <div className="w-full bg-white rounded-xl shadow-md p-6 border border-gray-300">
        <h2 className="text-2xl font-bold mb-4">Recent Sessions</h2>
        <Table>
          <TableHeader className="border-b-2 border-black">
            <TableRow>
              <TableHead className="text-base font-semibold">Lessons</TableHead>
              <TableHead className="text-base font-semibold">Subject</TableHead>
              <TableHead className="text-base font-semibold text-right">Duration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentSessions.map((item, index) => (
              <TableRow
                key={index}
                className="border-b border-gray-300 hover:bg-gray-50 transition py-2"
              >
                <TableCell className="py-2">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-md"
                      style={{ backgroundColor: item.color }}
                    >
                      <Image
                        src={item.icon}
                        alt={item.subject}
                        width={20}
                        height={20}
                      />
                    </div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-muted-foreground text-sm">{item.topic}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-2">
                  <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {item.subject}
                  </span>
                </TableCell>
                <TableCell className="text-right py-2">{item.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

    </div>
  );
}
