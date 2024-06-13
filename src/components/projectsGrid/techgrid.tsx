"use client";

import { useState } from "react";
import Image from "next/image";

import "./techstyle.css";
import Link from "next/link";
import { title } from "process";

export const techData = [
  {
    Library: [
      {
        id: 1,
        title: "React",
        img: "/react.png"
      },
      {
        id: 7,
        title: "Nextjs",
        img: "/next.svg"
      },

      {
        id: 8,
        title: "redux",
        img: "/redux.png"
      },
      {
        id: 50,
        title: "FabricJS",
        img: "/FabricJS.png"
      },
      {
        id: 57,
        title: "Mapbox",
        img: "/Mapbox.jpeg"
      },
      {
        id: 58,
        title: "Openlayers",
        img: "/Openlayers.jpeg"
      },
      {
        id: 59,
        title: "Leaflet",
        img: "/Leaflet.png"
      },
      {
        id: 60,
        title: "Nginx",
        img: "/Nginx.png"
      }
    ]
  },

  {
    Programming_Language: [
      {
        id: 3,
        title: "nodejs",
        img: "/node.png"
      },
      {
        id: 43,
        title: "Python",
        img: "/Python.png"
      },
      {
        id: 48,
        title: "GraphQl",
        img: "/GraphQl.png"
      },
      {
        id: 56,
        title: "Java",
        img: "/java.png"
      }
    ]
  },

  {
    Database: [
      {
        id: 4,
        title: "postgres",
        img: "/postgres.png"
      },
      {
        id: 5,
        title: "mongodb",
        img: "/mongodb.png"
      },
      {
        id: 6,
        title: "pinecone",
        img: "/pinecone.webp"
      }
    ]
  },

  {
    Devops: [
      {
        id: 9,
        title: "terraform",
        img: "/terraform.jpeg"
      },
      {
        id: 10,
        title: "terragrunt",
        img: "/terragrunt1.png"
      },
      {
        id: 11,
        title: "serverless framework",
        img: "/serverlessframework.png"
      },
      {
        id: 12,
        title: "AWS CDK",
        img: "/AWSCDK.png"
      },

      {
        id: 13,
        title: "Github Actions",
        img: "/GithubActions.jpeg"
      },
      {
        id: 14,
        title: "Codepipeline",
        img: "/Codepipeline.jpg"
      }
    ]
  },

  {
    ORM_Backend: [
      {
        id: 16,
        title: "KnexJS",
        img: "/KnexJS.jpeg"
      },
      {
        id: 17,
        title: "typeorm",
        img: "/typeorm.png"
      }
    ]
  },

  {
    AWS_Service: [
      {
        id: 18,
        title: "VPC",
        img: "/AWSService.jpg"
      },
      {
        id: 19,
        title: "Lambda",
        img: "/Lambda.png"
      },
      {
        id: 20,
        title: "SQS",
        img: "/SQS.png"
      },
      {
        id: 21,
        title: "SNS",
        img: "/SNS.png"
      },
      {
        id: 22,
        title: "SES",
        img: "/SES.png"
      },
      {
        id: 23,
        title: "ECR",
        img: "/ECR.png"
      },
      {
        id: 24,
        title: "ECS",
        img: "/ECS.jpeg"
      },
      {
        id: 25,
        title: "EKs",
        img: "/EKs.jpeg"
      },
      {
        id: 26,
        title: "S3",
        img: "/S3.jpeg"
      },
      {
        id: 27,
        title: "IAM",
        img: "/IAM.jpg"
      },
      {
        id: 28,
        title: "Amplify",
        img: "/Amplify.jpeg"
      },
      {
        id: 29,
        title: "RDS",
        img: "/RDS.jpg"
      },
      {
        id: 30,
        title: "Route53",
        img: "/Route53.webp"
      },
      {
        id: 31,
        title: "ACM",
        img: "/ACM.jpg"
      },
      {
        id: 32,
        title: "Cloudfront",
        img: "/Cloudfront.png"
      },
      {
        id: 33,
        title: "KMS",
        img: "/KMS.jpg"
      },
      {
        id: 34,
        title: "CMK",
        img: "/CMK.jpeg"
      },
      {
        id: 35,
        title: "SSO",
        img: "/SSO.jpg"
      },
      {
        id: 36,
        title: "OIDC Fedrated Identity",
        img: "/OIDCFedratedIdentity.jpeg"
      },
      {
        id: 37,
        title: "Cognito",
        img: "/Cognito.png"
      },
      {
        id: 38,
        title: "Fargate",
        img: "/Fargate.png"
      },
      {
        id: 39,
        title: "EC2",
        img: "/EC2.png"
      },
      {
        id: 40,
        title: "API Gateway",
        img: "/APIGateway.png"
      },

      {
        id: 42,
        title: "Netoworking",
        img: "/Netoworking.jpeg"
      },

      {
        id: 62,
        title: "AWS WAF",
        img: "/AWSWAF.webp"
      }
    ]
  },

  {
    rd_Party_Tools: [
      {
        id: 45,
        title: "Airflow",
        img: "/Airflow1.png"
      },
      {
        id: 46,
        title: "IBM Connect Direct",
        img: "/IBMConnectDirect.png"
      },
      {
        id: 47,
        title: "GoAnywhere",
        img: "/GoAnywhere.png"
      }
    ]
  },

  {
    UI_Framework: [
      {
        id: 51,
        title: "MaterialUI",
        img: "/MaterialUI.png"
      },

      {
        id: 52,
        title: "Antd",
        img: "/Antd.jpeg"
      },

      {
        id: 53,
        title: "Tailwind",
        img: "/Tailwind.jpeg"
      },
      {
        id: 54,
        title: "SemanticUI",
        img: "/SemanticUI.jpeg"
      },
      {
        id: 55,
        title: "Bootstrap",
        img: "/Bootstrap.jpeg"
      }
    ]
  }
];

function TechGrid() {
  const [filterKey, setFilterKey] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(4);

  const filteredData =
    filterKey === "all"
      ? techData.flatMap((category) => Object.values(category)[0])
      : techData
          .flatMap((category) => Object.values(category)[0])
          .filter((item) => item.category === filterKey);

  return (
    <div className="tech-container my-5">
      <ul className="tech-category-list">
        <li>
          <button
            className={filterKey === "all" ? "active" : ""}
            onClick={() => setFilterKey("all")}
          >
            All (
            {techData.flatMap((category) => Object.values(category)[0]).length})
          </button>
        </li>
        <div className="tech">
          {Object.entries(
            techData.reduce((acc: Record<string, number>, curr) => {
              const categoryKey = Object.keys(curr)[0];
              acc[categoryKey] = Object.values(curr)[0].length;
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
        </div>
      </ul>
      <div className="tech-container">
        {filteredData.slice(0, visibleCount).map((item) => (
          <div className="tech-card" key={item.id}>
            <div className="tech-card-content">
              <figure>
                <Image src={item.img} width={80} height={80} alt={item.title} />
              </figure>
              <span>
                <h6>{item.category}</h6>
                <h2>{item.title}</h2>
              </span>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < filteredData.length && (
        <button
          className="load-more-button"
          onClick={() => setVisibleCount(visibleCount + 4)}
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default TechGrid;
