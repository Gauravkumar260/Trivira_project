# 🌿 Trivira - Nutraceuticals Frontend

A modern, responsive frontend application for **Trivira**, a plant-based wellness and nutraceuticals brand. Built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Features

* **Global Design System:** Centralized Tailwind configuration with custom fonts (Rubik, Montserrat, DM Sans) and brand color palette.
* **Dynamic Product Filtering:** Filter products by category (Stevia, Protein, Functional Mushrooms) with URL query parameter support.
* **Content Systems:**
    * **Blogs:** Hero feature layout + dynamic article routing (`/blogs/[slug]`).
    * **Careers:** Complete recruiting flow: Job Listing -> Job Details -> Application Form.
* **Responsive UI:** Fully mobile-responsive Navigation bar, Footer, and Page layouts.
* **UX Enhancements:** * Smart "Scroll To Top" logic on route changes.
    * Animated "Back to Top" floating button.

## 🛠️ Tech Stack

* **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Icons:** Native SVGs (No external icon libraries)

## 🏃‍♂️ Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📂 Project Structure

```bash
/app
  ├── about/          # Company story & mission
  ├── blogs/          # Dynamic blog system
  ├── careers/        # Job listing & application flow
  ├── contact/        # Contact form
  ├── products/       # Main shop page with filtering
  ├── data/           # Centralized data (jobsData.ts, blogData.ts)
  └── layout.tsx      # Root layout (Navbar, Footer, Scroll Logic)
/components           # Reusable UI (Navbar, Footer, ProductCard)