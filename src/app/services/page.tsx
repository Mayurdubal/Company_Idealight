"use client";
import Link from "next/link";
import "../style.css";
import { homeService } from "@/constants/services";

const Services = () => {
  return (
    <div className="services menu-container">
      <h3 className="text-base font-semibold text-[#038956]">Our Services</h3>
      <h4>
        Build your <span>pixel-perfect</span> website
      </h4>
      {homeService.map((value, index) => (
        <p key={index}>{value.subheading}</p>
      ))}
      <div>
        {homeService.map((section, index) => (
          <div key={index}>
            <div className="services-page">
              {section?.all_services.map((service, serviceIndex) => (
                <div key={serviceIndex}>
                  <span className="badge">{service.service_name}</span>
                  <h5>{service.subheading}</h5>
                  <p>{service.details}</p>
                  <Link href={`/servicegrid/${serviceIndex + 1}`}>
                    <button className="btn">Discover</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
