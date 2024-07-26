"use client";
import { ServiceData } from "@/constants/serviceData";
import "../style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const ServicesDetails = () => {
  const pathname = usePathname();
  const temp = pathname.lastIndexOf("/");
  const serviceId = parseInt(pathname.slice(temp + 1), 10);
  const service = ServiceData[serviceId - 1];

  return (
    <div className="all-service">
      <div className="title">
        <Link href="/" className="btn">
          <Image src="/back-btn.svg" width={100} height={100} alt="id" />
        </Link>
        <div className="text-content">
          <h2>{service?.category}</h2>
          <p>{service?.subheading}</p>
        </div>
      </div>
      <div className="gradient-cards">
        {service?.services.map((sname, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <h3>{sname.service}</h3>
              <div>
                {sname.details.map((sub, ind) => (
                  <div key={ind}>
                    <h5>
                      <strong>{sub.title}</strong>
                    </h5>
                    <p>{sub.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="conclusion">
          <p>{service.conclusion}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
