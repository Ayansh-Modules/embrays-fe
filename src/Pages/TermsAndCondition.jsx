import React from "react";
import termsAndCondition from "../Data/Terms&Condition";
function TermsAndCondition() {
  return (
    <div className=" w-full ">
      <div className="title text-4xl font-semibold px-[10vw] mt-[50px] max-md:text-2xl">
        {termsAndCondition.title}
      </div>
      <div className="pl-[10vw]  text-justify pb-[5vh]">
        {termsAndCondition.termsAndConditions.map((item) => {
          if (item.id !== 12) {
            return (
              <div key={item.id} className="mb-[5vh] pr-[6vh]">
                <div className="subtitle font-semibold text-lg ">
                  {item.id} . {item.subtitle}
                </div>
                <div className="testimonial">{item.testimonial}</div>
              </div>
            );
          }
        })}
        <div className="subtitleTwelve ">
          <div className="subtitle font-semibold text-lg">12. Contact Us</div>
          <div className="testimonial text-base">
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at
            <span
              href="mailto:info@embraystechnologies.com?subject=Hello%20Embrays%20Technologies&body=Description"
              className="text-Layoutblue"
            >
              info@embraystechnologies.com
            </span> <br />
            By accessing or using our services, you acknowledge that you have
            read, understood, and agree to be bound by these Terms and
            Conditions.
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndCondition;
