"use client"

import React from "react"

export default function CVPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "48px",
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        fontFamily: "Syne, sans-serif",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
          <div>
            <h1 style={{ fontSize: 28, margin: 0 }}>IMRAN S</h1>
            <div style={{ marginTop: 6, color: "var(--text-secondary)" }}>
              UI/UX Designer | Front-End Developer | Creative Editor
            </div>

            <div style={{ marginTop: 12, color: "var(--text-muted)", fontSize: 14 }}>
              <div>■ +91 7806984562 | ■ imranabu12007@gmail.com</div>
              <div>■ Thiruvarur, Tamil Nadu</div>
              <div>■ linkedin.com/in/imran-s-44b8a53ab | ■ imran-portfoliocom.vercel.app</div>
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <button
              onClick={() => window.print()}
              style={{
                background: "white",
                color: "black",
                padding: "10px 14px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              Print / Save as PDF
            </button>
          </div>
        </div>

        <section style={{ marginTop: 28, background: "var(--bg-card)", padding: 18, borderRadius: 10, border: "1px solid var(--border)" }}>
          <h2 style={{ marginTop: 0 }}>Career Objective</h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Creative and motivated first-year college student skilled in UI/UX design, front-end development,
            and content creation. Passionate about building modern, user-friendly digital experiences.
          </p>

          <h3 style={{ marginTop: 18 }}>Education</h3>
          <p style={{ color: "var(--text-secondary)" }}>St. Joseph University – B.Tech (Kalvium Program) (2026 – Present)</p>

          <h3 style={{ marginTop: 18 }}>Skills</h3>
          <p style={{ color: "var(--text-secondary)" }}>
            UI/UX Design • HTML • CSS • JavaScript • Video Editing • Photo Editing • Graphic Design • Communication
          </p>

          <h3 style={{ marginTop: 18 }}>Projects</h3>
          <ul style={{ color: "var(--text-secondary)" }}>
            <li>Portfolio Website: Modern responsive design with clean UI and performance focus</li>
            <li>Content Creation: Created reels, posters, and edits improving storytelling skills</li>
          </ul>

          <h3 style={{ marginTop: 18 }}>Strengths</h3>
          <p style={{ color: "var(--text-secondary)" }}>Quick Learner • Creative Thinking • Strong Communication • Self-Motivated</p>

          <h3 style={{ marginTop: 18 }}>Languages</h3>
          <p style={{ color: "var(--text-secondary)" }}>English • Tamil</p>
        </section>
      </div>
    </main>
  )
}
