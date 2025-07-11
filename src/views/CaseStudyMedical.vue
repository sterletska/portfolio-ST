<template>
  <section class="case-wrapper">
    <DescriptionSection :descriptionData="medicalDescriptionData" />
    <OverviewSection :overviewContent="medicalOverviewContent" />
    <UserResearchSection :researchContent="medicalUserResearchContent" />
    <PersonasSection :personas="caseStudyPersonas" />

    <DesignDecisionsSection :designContent="currentDesignDecisionContent" />

    <MockupGallery :galleryContent="currentMockupGalleryContent" />
    <PrototypeLink :linkContent="currentPrototypeLinkContent" />
    <TakeawaysSection :takeawaysContent="currentTakeawaysContent" />
    <CaseStudyNav
      :prevCaseStudy="prevCaseStudy"
      :nextCaseStudy="nextCaseStudy"
    />
  </section>
</template>
  
  <script>
import DescriptionSection from "@/components/DescriptionSection.vue";
import OverviewSection from "@/components/OverviewSection.vue";
import UserResearchSection from "@/components/UserResearchSection.vue";
import PersonasSection from "@/components/PersonasSection.vue";

import DesignDecisionsSection from "@/components/DesignDecisionsSection.vue";

import MockupGallery from "@/components/MockupGallery.vue";
import PrototypeLink from "@/components/PrototypeLink.vue";
import TakeawaysSection from "@/components/TakeawaysSection.vue";
import CaseStudyNav from "@/components/CaseStudyNav.vue";

export default {
  name: "CaseStudyRabbitry",
  components: {
    DescriptionSection,
    OverviewSection,
    UserResearchSection,
    PersonasSection,

    DesignDecisionsSection,

    MockupGallery,
    PrototypeLink,
    TakeawaysSection,
    CaseStudyNav,
  },
  data() {
    return {
      // Data for the DescriptionSection
      medicalDescriptionData: {
        tableData: [
          {
            label: "Case Study",
            value: "Medical Treatment Cost Feature Design",
          },
          { label: "Role", value: "UI/UX Designer" },
          { label: "Timeline", value: " January 2020" },
          { label: "Scope", value: "Website Redesign" },
          { label: "Tools", value: "Figma" },
          {
            label: "Responsibilities",
            value:
              "user research and analysis, competitive audit, persona, empathy map, wireframing, prototyping, UI",
          },
        ],
        imageSrc: new URL("@/assets/mockup-med-1.jpg", import.meta.url).href,
        imageAlt: "Medical Treatment Cost Feature Screen",
      },

      // Data for the Overview Section
      medicalOverviewContent: {
        introductorySection: {
          paragraph:
            "This case study focuses on enhancing the user experience in estimating future medical expenses. Healthcare pricing is often unclear, leaving patients uncertain about what they’ll owe. As insurance plans increasingly feature high deductibles, coinsurance, and out-of-pocket costs, affordability has become a growing concern. Patients are demanding greater cost transparency. In 2020, 66% of Americans reported that healthcare was a major source of stress. Empowering patients with clear, upfront information about cost and quality is now essential to helping them make informed decisions and access more affordable care.",
        },
        contextSection: {
          heading: "Why redesign Blue Cross Blue Shield’s website?",
          paragraph:
            "Although doctors and hospitals negotiate prices with insurance plans before joining their networks, Blue Cross Blue Shield (BCBS) already has access to this pricing data. As the second-largest health insurance provider in the U.S., covering over 40 million members, BCBS has the potential to help many people by offering a customized cost calculator. Accessing prices through a member’s insurance account provides more accurate results because it factors in the specific details of each user’s plan. If the top five largest health insurance companies were to implement a treatment cost feature, approximately 145.4 million people—nearly half of the U.S. population—would gain access to this valuable tool.",
        },
        problem:
          "Patients struggle to estimate medical costs due to unclear pricing, hidden fees, and limited access to personalized cost information. This lack of transparency creates stress and prevents patients from making informed, cost-effective healthcare decisions.",
        goal: "Redesign the Blue Cross Blue Shield website to provide a transparent, user-friendly cost calculator that delivers accurate, personalized treatment estimates based on a user’s insurance plan, location, and provider network empowering users to make informed medical decisions, avoid surprise bills, and feel more in control of their healthcare spending.",
      },

      // Data for the User Research Section
      medicalUserResearchContent: {
        introTitle: "User Research Insights",
        introParagraph:
          "I conducted user interviews supported by secondary research to explore the following questions:",
        painPointsTitle:
          "Takeaways from User Interviews and Secondary Research:",
        painPoints: [
          {
            number: 1,
            headline: " In-Network Hospital Doesn’t Mean In-Network Care",
            description:
              "Visiting an in-network hospital does not guarantee treatment by in-network doctors, often leading to surprise bills.",
          },
          {
            number: 2,
            headline: "Listed Price ≠ Final Cost",
            description:
              "The listed cost is just a portion—facility fees, doctor fees, and supplies significantly increase the final bill.",
          },
          {
            number: 3,
            headline: "Price Info Often Inaccurate",
            description:
              "Prices found online or from providers rarely reflect what patients actually pay—only the negotiated rate applies.",
          },
          {
            number: 4,
            headline: "Patients Lack Cost Control",
            description:
              "Self-employed individuals and those needing complex care face high costs and little control over expenses.",
          },
          {
            number: 5,
            headline: "Out-of-Network Coverage Varies",
            description:
              "Some plans may cover out-of-network services if no in-network option is available, but rules differ.",
          },
          {
            number: 6,
            headline: "Insurance Estimates Are Just Averages",
            description:
              "Online cost tools use claims data and don’t factor in personal deductibles, coinsurance, or plan limits.",
          },
          {
            number: 7,
            headline: "Accurate Costs Require a Direct Quote",
            description:
              "Only a provider’s estimate—based on your actual plan—reflects what you'll pay out of pocket.",
          },
          {
            number: 8,
            headline: "No Approval, No Coverage",
            description:
              "Getting treatment without insurance pre-authorization risks full financial responsibility if coverage is denied.",
          },
        ],
      },
      // Data for the Personas Section (from previous interactions)
      caseStudyPersonas: [
        {
          name: "Persona",
          image: new URL("../assets/medical-persona.png", import.meta.url).href,
          problemStatementHeading: "Problem Statement",
          problemStatementDescription:
            "Jason is a business analyst with health insurance who needs a way to find high-quality medical care with clear, upfront costs because he is concerned about unexpected bills, denied insurance coverage, and hidden out-of-network providers that could leave him paying significantly more than anticipated.",
          empathyMapUrl: new URL(
            "../assets/medical-empathy-map.png",
            import.meta.url
          ).href,
        },
      ],

      // --- Design Decisions Content Variations ---

      // Variation 5: Image + Paragraph with Heading (next to image), then Feature Highlights (6 sets of image - text paragraph).
      designDecisions_Variation5: {
        sectionTitle: "User Flows",
        paragraphs: [],
        flexibleContentBlocks: [
          {
            heading: "User Flow Visualization",
            text: "At this stage, I created User Flows to better visualize the paths users take to complete their tasks. The two flows represent different starting points: in the first, the user begins by scanning or uploading a treatment plan; in the second, the user starts by searching for a procedure, lab test, or medical service.",
            additionalImages: [
              {
                imageUrl: new URL(
                  "../assets/medical-user-flow-1.png",
                  import.meta.url
                ).href,
                imageAlt:
                  "User Flow diagram showing the path when user starts by scanning or uploading a treatment plan.",
                caption: "User Flow: Scan/Upload Treatment Plan",
              },
              {
                imageUrl: new URL(
                  "../assets/medical-user-flow-2.png",
                  import.meta.url
                ).href,
                imageAlt:
                  "User Flow diagram showing the path when user starts by searching for a procedure, lab test, or medical service.",
                caption: "User Flow: Search for Procedure/Service",
              },
            ],
          },
        ],
        bigImage: {},
        prototypeLink: {},
        featureHighlights: [],
        loFidelityPrototypeSection: {},
      },

      currentDesignDecisionContent: {
        sectionTitle: "Design Decisions",
        paragraphs: [],
        flexibleContentBlocks: [],
        bigImage: {},
        prototypeLink: {},
        featureHighlights: [],
        loFidelityPrototypeSection: {},
      },

      // --- Mockup Gallery Content Variations ---

      //Medical
      mockupGallery_Variation4: {
        sectionTitle: "Mockups",
        introParagraph:
          "An in-depth look at key features, showcasing both visual design and functional explanations.",
        type: "image-text-svg-list",
        sections: [
          {
            imageUrl: new URL("../assets/mockup-med-1.jpg", import.meta.url)
              .href,
            imageAlt: "Member Home Screen with Treatment Cost Access",

            textBlock: {
              heading: "Adding Quick Access to Treatment Cost Information",
              svgParagraphs: [
                {
                  paragraph:
                    "The Find Treatment Cost option was added to the member’s account home screen to provide quick and easy access.",
                },
              ],
            },
          },
          {
            imageUrl: new URL("../assets/mockup-med-2.jpg", import.meta.url)
              .href,
            imageAlt:
              "Search for medical providers by name, procedure, or medical code, with upload option for procedure lists.",

            textBlock: {
              heading: "Search Options for Medical Services",
              svgParagraphs: [
                {
                  paragraph:
                    "Users can search by facility or doctor’s name, as well as by procedure, service, lab test name, or medical code. If they have a list of procedures or tests from their doctor, they can easily scan or upload it. The system will then find medical facilities that offer all or most of the services on the list, simplifying the search process and saving time.",
                },
              ],
            },
          },
          {
            imageUrl: new URL("../assets/mockup-med-3.jpg", import.meta.url)
              .href,
            imageAlt:
              "Mockup of Treatment Plan Coverage and Personalized Cost Insights",

            textBlock: {
              heading: "Treatment Plan Coverage and Personalized Cost Insights",
              svgParagraphs: [
                {
                  svgContent: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM9.2334 4.24805L5 15H6.25977L7.57812 11.5947H11.8701L13.2031 15H14.4922L10.2812 4.24805H9.2334ZM9.73926 5.61035C9.91014 6.22065 10.0762 6.73636 10.2373 7.15625L11.4824 10.4736H8.01758L9.27734 7.15625C9.47754 6.59473 9.63184 6.0791 9.73926 5.61035Z" fill="#FF9DBB"/>
                  </svg>`,
                  paragraph:
                    "A: Displays the percentage of procedures from your treatment plan that the hospital offers.",
                },
                {
                  svgContent: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM6.47266 4.29199V15H10.208C11.3699 14.9999 12.2735 14.7314 12.918 14.1943C13.5672 13.6572 13.8916 12.91 13.8916 11.9531C13.8916 10.5226 13.0788 9.66805 11.4531 9.38965V9.31641C12.1314 9.19433 12.6466 8.92846 12.998 8.51855C13.3545 8.10352 13.5332 7.57812 13.5332 6.94336C13.5332 6.02566 13.2154 5.35451 12.5811 4.92969C11.9463 4.50488 10.918 4.29199 9.49707 4.29199H6.47266ZM9.84863 9.93164C10.7617 9.93164 11.4404 10.0879 11.8848 10.4004C12.334 10.7129 12.5586 11.2012 12.5586 11.8652C12.5586 12.5781 12.3389 13.1035 11.8994 13.4404C11.4648 13.7723 10.8153 13.9385 9.95117 13.9385H7.71777V9.93164H9.84863ZM9.54883 5.36914C10.4861 5.36919 11.17 5.50298 11.5996 5.77148C12.0291 6.03518 12.2441 6.46794 12.2441 7.06836C12.244 7.7224 12.0507 8.18855 11.665 8.4668C11.2794 8.74018 10.6472 8.8769 9.76855 8.87695H7.71777V5.36914H9.54883Z" fill="#FF9DBB"/>
                  </svg>`,
                  paragraph:
                    "B: Treatment Cost represents the total price of services from the user’s treatment list that the facility provides. Your Price indicates the total amount the user is responsible for paying. The system calculates this amount by considering the user’s personal health plan benefits, such as co-payments, coinsurance, deductibles, and other relevant factors.",
                },
                {
                  svgContent: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10.0723 4.13867C9.01765 4.13867 8.09958 4.36334 7.31836 4.8125C6.54199 5.26172 5.94629 5.90137 5.53125 6.73145C5.12116 7.56148 4.91602 8.52841 4.91602 9.63184C4.91609 11.3943 5.34285 12.754 6.19727 13.7109C7.05664 14.668 8.27539 15.1465 9.85254 15.1465C10.9411 15.1464 11.8566 15.0077 12.5986 14.7295V13.6377C11.6418 13.9062 10.7899 14.041 10.043 14.041C8.82743 14.041 7.88963 13.6598 7.23047 12.8984C6.57625 12.1319 6.2491 11.0476 6.24902 9.64648C6.24902 8.28418 6.58789 7.21191 7.2666 6.43066C7.9502 5.64453 8.88086 5.25195 10.0576 5.25195C10.868 5.25203 11.6789 5.44246 12.4893 5.82324L13.0166 4.75391C12.1769 4.34381 11.1951 4.13873 10.0723 4.13867Z" fill="#FF9DBB"/>
                  </svg>`,
                  paragraph:
                    "C: By comparing facility prices with Medicare prices, users can see how a provider’s charges differ from the actual market prices of services. Medicare prices represent averages based on the amounts paid on real claims.",
                },
              ],
            },
          },
          {
            imageUrl: new URL("../assets/mockup-med-4.jpg", import.meta.url)
              .href,
            imageAlt: "Mockup of Breakdown of Hospital Charges Screen",

            textBlock: {
              heading: "Breakdown of Hospital Charges",
              svgParagraphs: [
                {
                  paragraph:
                    "To know upfront what exactly is included in the facility price, the user can See Treatment Plan Details.",
                },

                {
                  paragraph:
                    "The price of procedures listed in the facility price list is just one small portion of what a patient is expected to pay to the hospital. For most procedures, other services are added to the final bill including “facility fees,” medical supplies, pharmaceuticals and drugs, patient dietary and laundry services, and other support services like financial counseling and social services.",
                },
              ],
            },
          },
          {
            imageUrl: new URL("../assets/mockup-med-5.jpg", import.meta.url)
              .href,
            imageAlt: "Compare Facility Costs and Get Pre-Authorization Mockup",

            textBlock: {
              heading: "Compare Facility Costs and Get Pre-Authorization",
              svgParagraphs: [
                {
                  paragraph:
                    "Users have the option to compare treatment plan costs across different facilities, as well as prices for individual procedures, lab tests, or services from various providers. This flexibility allows users to substitute higher-cost services with more affordable alternatives without compromising care quality.",
                },
                {
                  paragraph:
                    "To ensure their treatment is covered under their insurance plan, users can select the Pre-Authorize button, complete a short form, and submit it for approval. This step helps avoid unexpected expenses and ensures coverage is confirmed in advance.",
                },
              ],
            },
          },
          {
            imageUrl: new URL("../assets/mockup-med-6.jpg", import.meta.url)
              .href,
            imageAlt:
              "Search by Procedure to Build and Compare Custom Treatment Plans",

            textBlock: {
              heading:
                "Search by Procedure to Build and Compare Custom Treatment Plans",
              svgParagraphs: [
                {
                  paragraph:
                    "In some cases, searching by individual procedure names provides a clearer way to compare service costs. Users can select the most cost-effective options, add them to their treatment list, group related services, and then compare overall pricing across providers for a more informed decision.",
                },
              ],
            },
          },
        ],
      },

      // --- Select the current content for the Mockup Gallery Section ---
      currentMockupGalleryContent: {
        sectionTitle: "Mockup Gallery",
        introParagraph: "",
        type: "default",
        sections: [],
        bottomImage: {},
      },

      // Data for the Prototype Link Section
      prototypeLink_Variation1: {
        sectionTitle: "High-fidelity prototype",
        linkBlocks: [
          {
            heading: "Figma Link",
            url: "https://www.figma.com/proto/4Z3JCqahHYeBlwfqGe6OwH/Healthcare?page-id=0%3A1&node-id=1%3A2&viewport=295%2C271%2C0.03&scaling=min-zoom&starting-point-node-id=1%3A2 ",
            linkText: "View Hi-Fi Prototype",
          },
          {
            heading: "Video Link",
            url: "https://youtu.be/-bLWQ4msAq0",
            linkText: "View Walkthrough",
          },
        ],
        imageUrl: new URL("../assets/figma-medical.png", import.meta.url).href,
        imageAlt:
          "The screenshot of the Figma prototype view of the medical website",
        imageCaption: "Interactive prototype showcasing key user flows.",
      },

      currentPrototypeLinkContent: {
        sectionTitle: "High-fidelity prototype",
        linkBlocks: [],
        imageUrl: "",
        imageAlt: "",
        imageCaption: "",
      },

      // --- Takeaways Section Content Variations ---
      //Rabbitry
      takeaways_Variation1: {
        sectionTitle: "Key Takeaways",
        type: "two-columns-simple",
        columns: [
          {
            heading: "What I learned:",
            paragraph1:
              "I gained valuable insights into crafting a seamless user experience by addressing the needs of both buyers and sellers—from detailed care guides to streamlined order management. Additionally, I enhanced my understanding of accessibility best practices to ensure the website is inclusive and user-friendly for all users.",
            paragraph2:
              "Finalize the design style guide for developers, including clear instructions on managing responsive elements and ensuring a consistent, user-friendly experience across all device types.",
          },
          {
            heading: "Next Steps",
            paragraph1:
              "Conduct usability testing with a diverse group of users to identify any remaining pain points or areas for improvement.",
            paragraph2:
              "Finalize the design style guide for developers, including clear instructions on managing responsive elements and ensuring a consistent, user-friendly experience across all device types.",
          },
        ],
      },
      //Budgeting
      takeaways_Variation2: {
        nextStepsHeading: "Next Steps",
        type: "next-steps-three-columns",
        columns: [
          {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0ZM19.625 11.0801L14.585 14.1035L15.7852 16.3604L18.7363 14.5723V25.4561H14.9209V28H25.3848V25.4561H21.8086V11.0801H19.625Z" fill="#FF97B8"/>
            </svg>`, // 1
            paragraph:
              "Implement security features such as multi-factor authentication for account sign-in and the use of a security key for creating and accessing the account from a new device.",
          },
          {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0ZM19.1924 10.8398C18.1046 10.8399 17.0567 11.0237 16.0488 11.3916C15.0408 11.7596 14.2003 12.2484 13.5283 12.8564L14.5605 15.1602C15.2165 14.5682 15.8966 14.1363 16.6006 13.8643C17.3206 13.5763 18.0566 13.4317 18.8086 13.4316C19.7686 13.4316 20.4972 13.6397 20.9932 14.0557C21.5051 14.4716 21.7607 15.08 21.7607 15.8799C21.7607 16.2958 21.6889 16.712 21.5449 17.1279C21.401 17.5438 21.1769 17.9759 20.873 18.4238C20.585 18.8718 20.1923 19.3597 19.6963 19.8877L14.2246 25.7197V28H25.457V25.4561H18.0557L21.7852 21.5684C22.3131 21.0244 22.7609 20.5038 23.1289 20.0078C23.5128 19.4959 23.8245 18.9995 24.0645 18.5195C24.3203 18.0397 24.5042 17.5599 24.6162 17.0801C24.7442 16.5842 24.8086 16.0802 24.8086 15.5684C24.8086 14.5605 24.5931 13.704 24.1611 13C23.7291 12.296 23.0966 11.7596 22.2646 11.3916C21.4327 11.0237 20.4083 10.8398 19.1924 10.8398Z" fill="#FF97B8"/></svg>`, // 2
            paragraph:
              "Set up notifications to alert users about upcoming due dates and when they reach the spending limit within a specific category.",
          },
          {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0ZM19.2168 10.8398C18.1288 10.8398 17.0803 11.0162 16.0723 11.3682C15.0645 11.7202 14.2246 12.2165 13.5527 12.8564L14.5605 15.1602C15.2165 14.5682 15.905 14.1363 16.625 13.8643C17.3449 13.5763 18.1212 13.4316 18.9531 13.4316C19.8808 13.4317 20.5845 13.624 21.0645 14.0078C21.5605 14.3918 21.8086 14.9525 21.8086 15.6885C21.8085 16.2163 21.6882 16.6643 21.4482 17.0322C21.2083 17.4001 20.8723 17.6886 20.4404 17.8965C20.0085 18.0883 19.4886 18.1836 18.8809 18.1836H16.457V20.7275H19.1689C20.1928 20.7276 20.9691 20.9282 21.4971 21.3281C22.0408 21.7121 22.3124 22.3039 22.3125 23.1035C22.3125 23.6475 22.1847 24.1121 21.9287 24.4961C21.6887 24.8801 21.3286 25.1684 20.8486 25.3604C20.3687 25.5523 19.7762 25.6484 19.0723 25.6484C18.1926 25.6484 17.3609 25.5121 16.5771 25.2402C15.7931 24.9682 15.0245 24.5438 14.2725 23.9678L13.2646 26.3203C13.7285 26.7202 14.2727 27.0636 14.8965 27.3516C15.5205 27.6396 16.1931 27.856 16.9131 28C17.649 28.1599 18.4011 28.2402 19.1689 28.2402C20.4328 28.2402 21.5207 28.048 22.4326 27.6641C23.3446 27.2641 24.0489 26.696 24.5449 25.96C25.0408 25.224 25.289 24.36 25.2891 23.3682C25.2891 22.6002 25.1444 21.9201 24.8564 21.3281C24.5684 20.7361 24.1524 20.2483 23.6084 19.8643C23.1978 19.5744 22.7237 19.3569 22.1855 19.2129C22.9062 18.9444 23.4934 18.524 23.9443 17.9443C24.5043 17.2084 24.7851 16.3361 24.7852 15.3281C24.7852 14.3841 24.5603 13.5837 24.1123 12.9277C23.6803 12.2559 23.0486 11.7435 22.2168 11.3916C21.3848 11.0236 20.3847 10.8399 19.2168 10.8398Z" fill="#FF97B8"/>`, // 3
            paragraph: "Conduct user testing of the hi-fi prototype.",
          },
        ],
      },
      //Vacation Takeaways
      takeaways_Variation3: {
        type: "two-sections-detailed",
        takeawaysSection: {
          heading: "Key Takeaways",
          twoColumnContainers: [
            {
              columns: [
                {
                  svg: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <path d="M25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0ZM20.9668 34.7441V39.9824H27.2598V34.7441H20.9668ZM20.9668 9.0625L22.1973 31.5801H26.0293L27.2598 9.0625H20.9668Z" fill="#FF98B8"/>
                  </svg>`, // Impact
                  heading: "Impact (User reviews)",
                  paragraph1:
                    "Honestly, if you build this app in the future I am getting it! This is my biggest issue with traveling having to remember, print or go through several apps to find the one ticket. Such an amazing idea!!",
                  paragraph2:
                    "I was actually thinking could this be added to a gmail, apple, or outlook calendar as well?",
                  paragraph3:
                    "This is literally the fundamentals to a vacation. Really good idea of adding a map too!",
                },
                {
                  svg: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <path d="M25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0ZM41.4102 17.3115C38.2754 14.257 34.7144 13.6537 31.5801 14.1611C28.8885 14.597 26.5078 15.8465 24.9092 17.0352C21.4926 14.3948 18.0398 13.7353 15.0283 14.0869C11.8675 14.456 9.24732 15.9299 7.67578 17.2666C7.22181 17.6528 7.00004 18.207 7 18.751V32.9092C7 34.6457 8.95201 35.4335 10.2344 34.626C13.2589 32.7215 15.9917 32.4902 18.3359 32.9697C20.717 33.4568 22.755 34.6901 24.3193 35.8125L24.9053 36.2334L25.4893 35.8096C30.4413 32.2168 35.7473 33.34 38.874 34.8936C39.5659 35.2373 40.3351 35.1603 40.9199 34.835C41.5114 34.5057 42 33.8685 42 33.0391V18.7207C42 18.2042 41.7973 17.6889 41.4102 17.3115ZM31.9004 16.1357C34.5032 15.7144 37.3903 16.1944 40 18.7285V33.0391C40 33.0431 40.0009 33.042 39.999 33.0449C39.9947 33.0517 39.9792 33.0691 39.9473 33.0869C39.8746 33.1273 39.8031 33.1221 39.7637 33.1025C36.576 31.5188 31.1928 30.2521 25.9023 33.1797V18.7939C27.2839 17.72 29.4649 16.53 31.9004 16.1357ZM15.2607 16.0732C17.8235 15.7741 20.8329 16.3284 23.9023 18.7871V33.1328C22.4682 32.2564 20.7245 31.4163 18.7373 31.0098C15.9098 30.4314 12.6473 30.7427 9.16797 32.9336C9.13727 32.9528 9.08711 32.9609 9.03223 32.9336C9.01246 32.9237 9.00321 32.913 9 32.9092V18.7666C10.3316 17.6431 12.5801 16.3862 15.2607 16.0732ZM37.2607 26.4443C33.6027 23.7172 29.837 25.5381 27.9902 26.6318C27.5152 26.9133 27.3583 27.5268 27.6396 28.002C27.9212 28.4769 28.5347 28.6339 29.0098 28.3525C30.8596 27.257 33.6647 26.0463 36.3369 28.2617C36.7621 28.6142 37.3926 28.555 37.7451 28.1299C38.0755 27.7312 38.0451 27.1522 37.6895 26.791L37.6143 26.7227L37.2607 26.4443ZM37.6143 21.7168C33.8477 18.5937 29.8965 20.497 27.9902 21.626C27.5151 21.9074 27.3583 22.5209 27.6396 22.9961C27.9211 23.4713 28.5346 23.629 29.0098 23.3477C30.8596 22.2521 33.6645 21.0411 36.3369 23.2568C36.762 23.6093 37.3926 23.55 37.7451 23.125C38.0976 22.6999 38.0393 22.0693 37.6143 21.7168Z" fill="#FF97B8"/>
                  </svg>`, // Book
                  heading: "What I learned",
                  paragraph1:
                    "I learned that research, testing, and following a structured design process are essential to creating a successful product. Research and testing help center the design around user needs, guiding decisions throughout development. Evaluating competitors' strengths and weaknesses also provides valuable insight—allowing us to adopt proven features while improving upon those that fail to meet user expectations.",
                },
              ],
            },
          ],
        },
        nextStepsSection: {
          heading: "Next Steps",
          columns: [
            {
              svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0ZM19.625 11.0801L14.585 14.1035L15.7852 16.3604L18.7363 14.5723V25.4561H14.9209V28H25.3848V25.4561H21.8086V11.0801H19.625Z" fill="#FF97B8"/>
            </svg>`, // 1
              paragraph:
                "Add a flight search feature. While not all users travel to their vacation destination by plane, flight booking is often considered an essential part of trip planning.",
            },
            {
              svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0ZM19.1924 10.8398C18.1046 10.8399 17.0567 11.0237 16.0488 11.3916C15.0408 11.7596 14.2003 12.2484 13.5283 12.8564L14.5605 15.1602C15.2165 14.5682 15.8966 14.1363 16.6006 13.8643C17.3206 13.5763 18.0566 13.4317 18.8086 13.4316C19.7686 13.4316 20.4972 13.6397 20.9932 14.0557C21.5051 14.4716 21.7607 15.08 21.7607 15.8799C21.7607 16.2958 21.6889 16.712 21.5449 17.1279C21.401 17.5438 21.1769 17.9759 20.873 18.4238C20.585 18.8718 20.1923 19.3597 19.6963 19.8877L14.2246 25.7197V28H25.457V25.4561H18.0557L21.7852 21.5684C22.3131 21.0244 22.7609 20.5038 23.1289 20.0078C23.5128 19.4959 23.8245 18.9995 24.0645 18.5195C24.3203 18.0397 24.5042 17.5599 24.6162 17.0801C24.7442 16.5842 24.8086 16.0802 24.8086 15.5684C24.8086 14.5605 24.5931 13.704 24.1611 13C23.7291 12.296 23.0966 11.7596 22.2646 11.3916C21.4327 11.0237 20.4083 10.8398 19.1924 10.8398Z" fill="#FF97B8"/></svg>`, // 2
              paragraph:
                "Add a service filter to the Eat section of the Planner. Enable users to sort dining options based on available services such as takeout, curbside pickup, delivery, and more.",
            },
            {
              svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0ZM19.2168 10.8398C18.1288 10.8398 17.0803 11.0162 16.0723 11.3682C15.0645 11.7202 14.2246 12.2165 13.5527 12.8564L14.5605 15.1602C15.2165 14.5682 15.905 14.1363 16.625 13.8643C17.3449 13.5763 18.1212 13.4316 18.9531 13.4316C19.8808 13.4317 20.5845 13.624 21.0645 14.0078C21.5605 14.3918 21.8086 14.9525 21.8086 15.6885C21.8085 16.2163 21.6882 16.6643 21.4482 17.0322C21.2083 17.4001 20.8723 17.6886 20.4404 17.8965C20.0085 18.0883 19.4886 18.1836 18.8809 18.1836H16.457V20.7275H19.1689C20.1928 20.7276 20.9691 20.9282 21.4971 21.3281C22.0408 21.7121 22.3124 22.3039 22.3125 23.1035C22.3125 23.6475 22.1847 24.1121 21.9287 24.4961C21.6887 24.8801 21.3286 25.1684 20.8486 25.3604C20.3687 25.5523 19.7762 25.6484 19.0723 25.6484C18.1926 25.6484 17.3609 25.5121 16.5771 25.2402C15.7931 24.9682 15.0245 24.5438 14.2725 23.9678L13.2646 26.3203C13.7285 26.7202 14.2727 27.0636 14.8965 27.3516C15.5205 27.6396 16.1931 27.856 16.9131 28C17.649 28.1599 18.4011 28.2402 19.1689 28.2402C20.4328 28.2402 21.5207 28.048 22.4326 27.6641C23.3446 27.2641 24.0489 26.696 24.5449 25.96C25.0408 25.224 25.289 24.36 25.2891 23.3682C25.2891 22.6002 25.1444 21.9201 24.8564 21.3281C24.5684 20.7361 24.1524 20.2483 23.6084 19.8643C23.1978 19.5744 22.7237 19.3569 22.1855 19.2129C22.9062 18.9444 23.4934 18.524 23.9443 17.9443C24.5043 17.2084 24.7851 16.3361 24.7852 15.3281C24.7852 14.3841 24.5603 13.5837 24.1123 12.9277C23.6803 12.2559 23.0486 11.7435 22.2168 11.3916C21.3848 11.0236 20.3847 10.8399 19.2168 10.8398Z" fill="#FF97B8"/>`, // 3
              paragraph:
                "Add business hours filter to the Eat and Do sections. Allow users to sort items based on current business hours, helping them easily find places that are open or closed at the time of search.",
            },
          ],
        },
      },
      //Real Estate Takeaways
      takeaways_Variation4: {
        type: "two-sections-paragraphs",
        keyTakeaways: {
          heading: "Key Takeaways from the Design Process",
          paragraphs: [
            {
              heading: "Efficiency and Time-Saving",
              text: "Understanding that users highly value efficiency and convenience during the home search process was critical. The application was designed to minimize effort by offering flexible search options, detailed area and property information, and time-saving tools such as commute time estimators.",
            },
            {
              heading: "Competitive Analysis",
              text: "Evaluating competing products revealed common standards and gaps in user experience. This analysis helped identify opportunities to enhance existing features or introduce new ones—ultimately creating a more user-centric and differentiated product.",
            },
            {
              heading: "Data-Driven Decision Making",
              text: "Incorporating features like price history trends and comparative property analysis empowered users to make informed, confident decisions. These tools highlight the importance of transparency and actionable data in real estate decision-making.",
            },
            {
              heading: "Addressing Specific User Concerns",
              text: "User feedback highlighted concerns such as school district quality and the condition of major home systems (e.g., HVAC and roofing). These insights guided the inclusion of filters and features that address these priorities, resulting in a more personalized and relevant user experience.",
            },
          ],
        },
        furtherImprovement: {
          heading: "Areas for Further Improvement",
          paragraphs: [
            {
              heading: "Data Sources",
              text: "Continuously updating and expanding data related to area information, school ratings, crime statistics, and other key factors is essential. Maintaining accurate and current data is crucial for preserving user trust and supporting informed decision-making.",
            },
            {
              heading: "Mobile Platform Compatibility",
              text: "Ensuring the app performs smoothly across various mobile platforms (iOS and Android) and accommodates different device sizes and resolutions is vital for broad user accessibility and engagement.",
            },
            {
              heading: "Privacy and Security",
              text: "Given the collection of sensitive information such as user location and preferences, implementing strong privacy and security measures is necessary to protect user data and maintain trust.",
            },
            {
              heading: "Feedback Mechanisms",
              text: "Incorporating feedback features, including user reviews and ratings, can improve the overall user experience and provide valuable insights to guide ongoing app refinements.",
            },
          ],
        },
      },
      //Medical Takeaways
      takeaways_Variation5: {
        summaryHeading: "Project Summary",
        type: "summary-four-paragraphs",
        paragraphs: [
          {
            text: "With rising deductibles, increasing undisclosed medical costs, higher out-of-pocket expenses, and more out-of-network providers, upfront information about medical prices and covered services is critically important. Navigating insurance complexities—such as meeting deductibles, obtaining pre-approvals, verifying provider networks, and understanding facility charges—can be confusing and time-consuming for patients.",
          },
          {
            text: "Health insurers can support members by simplifying these processes, providing easy and convenient access to essential information, which benefits both users and insurers alike.",
          },
          {
            text: "To improve quality assessment, I recommend enabling patient reviews on the BCBS website and adding a “Treatment Effectiveness” or “Helped to Recover” metric alongside existing ratings such as Provider Recommendation, Communication, Courtesy, Environment, and Promptness.",
          },
          {
            text: "Statistics indicate that over one-third of healthcare services currently delivered do not effectively improve patient outcomes. Incorporating patient feedback and outcome-based ratings can help identify and reduce wasteful practices that offer minimal clinical benefit.",
          },
          {
            text: "Feedback requests could be integrated into user accounts, appearing via email or pop-ups during routine interactions like bill payment or claim status checks, encouraging patients to share their experiences and improve care quality.",
          },
        ],
      },
      currentTakeawaysContent: {
        sectionTitle: "Takeaways & Next Steps",
        type: "default",
        columns: [],
        nextStepsHeading: "",
        takeawaysSection: {},
        nextStepsSection: {},
        keyTakeaways: {},
        furtherImprovement: {},
        summaryHeading: "",
        paragraphs: [],
      },
      // --- Case Study Navigation Data ---
      prevCaseStudy: {
        name: "Vacation Planner App",
        link: "/case-study/vacation", // case study link
        thumbnail: new URL("../assets/vacation-thumbnail.png", import.meta.url)
          .href,
      },
      nextCaseStudy: {
        name: "Budgeting App and Website",
        link: "/case-study/budgeting", // case study link
        thumbnail: new URL("../assets/budgeting-thumbnail.png", import.meta.url)
          .href,
      },
    };
  },

  created() {
    //Design decisions
    this.currentDesignDecisionContent = this.designDecisions_Variation5;

    // Competitive audit content
    this.currentCompetitiveAuditContent =
      this.competitiveAudit_TwoNumberedLists;

    // The content for the Mockup Gallery section
    this.currentMockupGalleryContent = this.mockupGallery_Variation4; //Medical

    // Prototype Link section
    this.currentPrototypeLinkContent = this.prototypeLink_Variation1;

    //  Takeaways section
    this.currentTakeawaysContent = this.takeaways_Variation5; //Medical
  },
};
</script>

  <style scoped>
.case-wrapper {
  background: #f7f8f9;
}
</style>
