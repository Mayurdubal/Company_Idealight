"use client";

import { useState } from "react";
import Image from "next/image";

import "./style.css";
import Link from "next/link";

export const techData = [
  {
    tech_id: 1,
    category: "Library",
    title: "React",
    img: "/assets/tech/React1.png"
  },
  {
    tech_id: 2,
    category: "Library",
    title: "Next.js",
    img: "/assets/tech/next.svg"
  },
  {
    tech_id: 3,
    category: "Library",
    title: "redux",
    img: "/assets/tech/redux.png"
  },
  {
    tech_id: 4,
    category: "Library",
    title: "FabricJS",
    img: "/FabricJS.png"
  },
  {
    tech_id: 5,
    category: "Library",
    title: "Mapbox",
    img: "/Mapbox.jpeg"
  },
  {
    tech_id: 6,
    category: "Library",
    title: "Open Layers",
    img: "/Openlayers.jpeg"
  },
  {
    tech_id: 7,
    category: "Library",
    title: "Leaflet",
    img: "/Leaflet.png"
  },
  {
    tech_id: 8,
    category: "Library",
    title: "Nginx",
    img: "/Nginx.png"
  },

  {
    tech_id: 9,
    category: "Languages",
    title: "Node.JS",
    img: "/assets/tech/node.png"
  },
  {
    tech_id: 10,
    category: "Languages",
    title: "Python",
    img: "/Python.png"
  },
  {
    tech_id: 11,
    category: "Languages",
    title: "GraphQl",
    img: "/GraphQl.png"
  },
  {
    tech_id: 12,
    category: "Languages",
    title: "Java",
    img: "/java.png"
  },
  {
    tech_id: 13,
    category: "Languages",
    title: "Typescript",
    img: "/typescript.png"
  },
  {
    tech_id: 14,
    category: "Languages",
    title: "Next.JS",
    img: "/next.svg"
  },
  {
    tech_id: 15,
    category: "Database",
    title: "postgres",
    img: "/postgres.png"
  },
  {
    tech_id: 16,
    category: "Database",

    title: "Mongodb",
    img: "/mongodb.png"
  },
  {
    tech_id: 17,
    category: "Database",
    title: "Pinecone",
    img: "/pinecone.png"
  },

  {
    tech_id: 18,
    category: "Devops",
    title: "terraform",
    img: "/terraform.png"
  },
  {
    tech_id: 19,
    category: "Devops",
    title: "terragrunt",
    img: "/terragrunt1.png"
  },
  {
    tech_id: 20,
    category: "Devops",
    title: "serverless framework",
    img: "/serverlessframework.png"
  },
  {
    tech_id: 21,
    category: "Devops",
    title: "AWS CDK",
    img: "/AWSCDK.png"
  },

  {
    tech_id: 22,
    category: "Devops",
    title: "Github Actions",
    img: "/GithubActions.png"
  },
  {
    tech_id: 23,
    category: "Devops",
    title: "Codepipeline",
    img: "/Codepipeline.png"
  },

  {
    tech_id: 24,
    category: "ORM Backend",
    title: "KnexJS",
    img: "/KnexJS.png"
  },
  {
    tech_id: 25,
    category: "ORM Backend",
    title: "Typeorm",
    img: "/typeorm.png"
  },

  {
    tech_id: 26,
    category: "AWS Service",
    title: "VPC",
    img: "/AWSService.png"
  },
  {
    tech_id: 27,
    category: "AWS Service",
    title: "Lambda",
    img: "/Lambda.png"
  },
  {
    tech_id: 28,
    category: "AWS Service",
    title: "SQS",
    img: "/SQS.png"
  },
  {
    tech_id: 29,
    category: "AWS Service",
    title: "SNS",
    img: "/SNS.png"
  },
  {
    tech_id: 30,
    category: "AWS Service",
    title: "SES",
    img: "/SES.png"
  },
  {
    tech_id: 31,
    category: "AWS Service",
    title: "ECR",
    img: "/ECR.png"
  },
  {
    tech_id: 32,
    category: "AWS Service",
    title: "ECS",
    img: "/ECS.jpeg"
  },
  {
    tech_id: 33,
    category: "AWS Service",
    title: "EKs",
    img: "/EKs.png"
  },
  {
    tech_id: 34,
    category: "AWS Service",
    title: "S3",
    img: "/S3.png"
  },
  {
    tech_id: 35,
    category: "AWS Service",
    title: "IAM",
    img: "/IAM.jpg"
  },
  {
    tech_id: 36,
    category: "AWS Service",
    title: "Amplify",
    img: "/Amplify.png"
  },
  {
    tech_id: 37,
    category: "AWS Service",
    title: "RDS",
    img: "/RDS.png"
  },
  {
    tech_id: 38,
    category: "AWS Service",
    title: "Route53",
    img: "/Route53.png"
  },
  {
    tech_id: 39,
    category: "AWS Service",
    title: "ACM",
    img: "/ACM.png"
  },
  {
    tech_id: 40,
    category: "AWS Service",
    title: "Cloudfront",
    img: "/Cloudfront.png"
  },
  {
    tech_id: 41,
    category: "AWS Service",
    title: "KMS",
    img: "/KMS.png"
  },
  {
    tech_id: 42,
    category: "AWS Service",
    title: "CMK",
    img: "/CMK.png"
  },
  {
    tech_id: 43,
    category: "AWS Service",
    title: "SSO",
    img: "/SSO.png"
  },
  {
    tech_id: 44,
    category: "AWS Service",
    title: "OIDC Fedrated Identity",
    img: "/Otech_idCFedratedtech_identity.png"
  },
  {
    tech_id: 45,
    category: "AWS Service",
    title: "Cognito",
    img: "/Cognito.png"
  },
  {
    tech_id: 46,
    category: "AWS Service",
    title: "Fargate",
    img: "/Fargate.png"
  },
  {
    tech_id: 47,
    category: "AWS Service",
    title: "EC2",
    img: "/EC2.png"
  },
  {
    tech_id: 48,
    category: "AWS Service",
    title: "API Gateway",
    img: "/APIGateway.png"
  },

  {
    tech_id: 49,
    category: "AWS Service",
    title: "Netoworking",
    img: "/Netoworking.png"
  },

  {
    tech_id: 50,
    category: "AWS Service",
    title: "AWS WAF",
    img: "/AWSWAF.png"
  },

  {
    tech_id: 51,
    category: "3rd Party Tools",
    title: "Airflow",
    img: "/Airflow1.png"
  },
  {
    tech_id: 52,
    category: "3rd Party Tools",
    title: "IBM Connect Direct",
    img: "/IBMConnectDirect.png"
  },
  {
    tech_id: 53,
    category: "3rd Party Tools",
    title: "GoAnywhere",
    img: "/GoAnywhere.png"
  },

  {
    tech_id: 54,
    category: "UI Framework",
    title: "MaterialUI",
    img: "/MaterialUI.png"
  },

  {
    tech_id: 55,
    category: "UI Framework",
    title: "Antd",
    img: "/Antd.png"
  },

  {
    tech_id: 56,
    category: "UI Framework",
    title: "Tailwind",
    img: "/Tailwind.png"
  },
  {
    tech_id: 57,
    category: "UI Framework",
    title: "SemanticUI",
    img: "/SemanticUI.jpeg"
  },
  {
    tech_id: 58,
    category: "UI Framework",
    title: "Bootstrap",
    img: "/Bootstrap.svg"
  }
];

function TechGrid() {
  const [filterKey, setFilterKey] = useState<string>("Library");

  const filteredData =
    filterKey === "all"
      ? techData
      : techData.filter((item) => item.category === filterKey);

  return (
    <div>
      <div className="tech-list">
        <ul>
          {Object.entries(
            techData.reduce((acc: Record<string, number>, curr) => {
              acc[curr.category] = (acc[curr.category] || 0) + 1;
              return acc;
            }, {})
          ).map(([category, count]) => (
            <li key={category}>
              <button
                className={filterKey === category ? "active" : ""}
                onClick={() => setFilterKey(category)}
              >
                {category} ({count})
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="tech-container">
        {filteredData.map((item) => (
          <div className="tech-card" key={item.tech_id}>
            <figure>
              <Image src={item.img} width={80} height={80} alt="tech-image" />
            </figure>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechGrid;
