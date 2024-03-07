"use client";

import { useState } from "react";
import Image from "next/image";

import "./style.css";
import Link from "next/link";

export const projectData = [
  {
    id: 1,
    name: "bartleby",
    title: "Bartleby",
    category: "Education",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Education",
    caseStuday: 1,
    img: "/bartleby.svg"
  },
  {
    id: 2,
    name: "designer-watches-llp",
    title: "Designer Watches LLP",
    category: "Inventory Management",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Systems",
    caseStuday: 2,
    img: "/designer.svg"
  },
  {
    id: 3,
    name: "uk-post-office",
    title: "UK Post Office",
    category: "Govt",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Govt",
    caseStuday: 3,
    img: "/bartleby.svg"
  },
  {
    id: 4,
    name: "nike",
    title: "Nike",
    category: "Inventory Management",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Systems",
    caseStuday: 4,
    img: "/nike.svg"
  },
  {
    id: 5,
    name: "tamohara",
    title: "Tamohara",
    category: "Finance",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Finance",
    caseStuday: 5,
    img: "/smi.svg"
  },
  {
    id: 6,
    name: "qritive",
    title: "Qritive",
    category: "Healthcare",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Healthcare",
    caseStuday: 6,
    img: "/qritive.svg"
  },
  {
    id: 7,
    name: "optum-uhc",
    title: "Optum + UHC",
    category: "Healthcare",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Healthcare",
    caseStuday: 7,
    img: "/bartleby.svg"
  },
  {
    id: 8,
    name: "lofoods",
    title: "LoFoods",
    category: "Healthcare",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Healthcare",
    caseStuday: 8,
    img: "/lofoods.svg"
  },
  {
    id: 9,
    name: "alphacoach",
    title: "Alphacoach",
    category: "Healthcare",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Healthcare",
    caseStuday: 9,
    img: "/alphacoach.svg"
  },
  {
    id: 10,
    name: "bhavyata-foundation",
    title: "Bhavyata Foundation",
    category: "NGO",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "NGO",
    caseStuday: 10,
    img: "/bhavyata.svg"
  },
  {
    id: 11,
    name: "lemark-education",
    title: "LeMark Education",
    category: "Education",
    desc: "Aenean vulputate eleifend tellus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Proin faucibus arcu quis ante. Inut quam vitae...",
    filter: "Education",
    caseStuday: 11,
    img: "/lemark.svg"
  }
];

const ProjectsGrid = () => {
  const [filterKey, setFilterKey] = useState<string>("all");

  const filteredData =
    filterKey === "all"
      ? projectData
      : projectData.filter((item) => item.category === filterKey);

  return (
    <div className="my-5">
      <ul className="category-list">
        <li>
          <button
            className={filterKey === "all" ? "active" : ""}
            onClick={() => setFilterKey("all")}
          >
            All ({projectData.length})
          </button>
        </li>
        {Object.entries(
          projectData.reduce((acc: Record<string, number>, curr) => {
            acc[curr.category] = (acc[curr.category] || 0) + 1;
            return acc;
          }, {})
        ).map(([category, count]) => (
          <li key={category}>
            <button
              className={filterKey === category ? "active" : ""}
              onClick={() => setFilterKey(category)}
            >
              {category}({count})
            </button>
          </li>
        ))}
      </ul>
      <div className="project-container">
        {filteredData.map((item) => (
          <Link href="/casestudy" key={item.id}>
            <div className="project-card">
              <div>
                <Image
                  src={`${item.img}`}
                  width={270}
                  height={270}
                  alt="bartleby"
                />
                <span>
                  <h6>{item.category}</h6>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <Image
                    className="caseButton"
                    src="/caseButton.svg"
                    width={140}
                    height={140}
                    alt="caseStudy"
                  />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
