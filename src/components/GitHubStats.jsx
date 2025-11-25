import React, { useEffect } from "react";
import { BlurFade } from "../../components/ui/blur-fade";
import { Badge } from "../../components/ui/badge";

const GitHubStats = () => {
  const username = "sameersheikh2";

  // Console greeting
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(
        "%c👋 Hey there! Need something? Email: sameersheikh819@gmail.com",
        "color: #3b82f6; font-weight: bold;"
      );
    }
  }, []);

  return (
    <section id="github" className="scroll-mt-20 py-16">
      <BlurFade delay={0.1}>
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="text-sm bg-black text-white dark:bg-white dark:text-black">
              GitHub Activity
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Development Stats
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {/* GitHub Stats Card */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-lg">
              <h3 className="text-xl font-semibold mb-4">GitHub Overview</h3>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&count_private=true&theme=dark&hide_border=true&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9&icon_color=58a6ff`}
                alt="GitHub Stats"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Top Languages Card */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Top Languages</h3>
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&hide_border=true&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9`}
                alt="Top Languages"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Contribution Graph - Full Width */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-lg md:col-span-2">
              <h3 className="text-xl font-semibold mb-4">Activity Graph</h3>
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github-dark&hide_border=true&bg_color=0d1117&color=58a6ff&line=58a6ff&point=c9d1d9&area=true&area_color=58a6ff`}
                alt="GitHub Activity Graph"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl md:col-span-2">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true&background=0d1117&stroke=58a6ff&ring=58a6ff&fire=58a6ff&currStreakLabel=c9d1d9&sideLabels=c9d1d9&currStreakNum=c9d1d9&sideNums=c9d1d9&dates=c9d1d9`}
                alt="GitHub Streak"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* GitHub Button */}
            <div className="md:col-span-2 flex justify-center mt-4">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-lg font-medium w-full max-w-xs"
              >
                View Full GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
};

export default GitHubStats;
