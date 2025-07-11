<template>
  <section class="case-wrapper">
    <DescriptionSection :descriptionData="vacationDescriptionData" />
    <OverviewSection :overviewContent="vacationOverviewContent" />
    <CompetitiveAuditSection :auditContent="currentCompetitiveAuditContent" />
    <UserResearchSection :researchContent="vacationUserResearchContent" />
    <PersonasSection :personas="caseStudyPersonas" />

    <DesignDecisionsSection :designContent="currentDesignDecisionContent" />
    <UsabilityStudySection :usabilityContent="currentUsabilityStudyContent" />
    <MockupGallery :galleryContent="currentMockupGalleryContent" />
    <PrototypeLink :linkContent="currentPrototypeLinkContent" />
    <AccessibilitySection :accessibilityContent="currentAccessibilityContent" />
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
import CompetitiveAuditSection from "@/components/CompetitiveAuditSection.vue";
import DesignDecisionsSection from "@/components/DesignDecisionsSection.vue";
import UsabilityStudySection from "@/components/UsabilityStudySection.vue";
import MockupGallery from "@/components/MockupGallery.vue";
import PrototypeLink from "@/components/PrototypeLink.vue";
import AccessibilitySection from "@/components/AccessibilitySection.vue";
import TakeawaysSection from "@/components/TakeawaysSection.vue";
import CaseStudyNav from "@/components/CaseStudyNav.vue";

export default {
  name: "CaseStudyVacation",
  components: {
    DescriptionSection,
    OverviewSection,
    UserResearchSection,
    PersonasSection,
    CompetitiveAuditSection,
    DesignDecisionsSection,
    UsabilityStudySection,
    MockupGallery,
    PrototypeLink,
    AccessibilitySection,
    TakeawaysSection,
    CaseStudyNav,
  },
  data() {
    return {
      // Data for the DescriptionSection
      vacationDescriptionData: {
        tableData: [
          { label: "Case Study", value: "Vacation Planner Application" },
          { label: "Role", value: "UI/UX Designer" },
          { label: "Timeline", value: "July 2024" },
          { label: "Scope", value: "Responsive website design" },
          { label: "Tools", value: "Figma, Adobe Illustrator" },
          {
            label: "Responsibilities",
            value:
              "User research, competitive audit, IA, persona, user journey, wireframing, prototyping, splash screen animation, micro interactions, UI, icons",
          },
        ],
        imageSrc: new URL("@/assets/Vacation2.png", import.meta.url).href,
        imageAlt: "Vacation project mockups",
      },
      // Data for the Overview Section
      vacationOverviewContent: {
        introductorySection: {
          paragraph:
            "The Vacation Planner is an all-in-one travel app designed for adults aged 25–50 that allows users to search for vacation essentials such as accommodations and activities, create and manage trips by saving desirable places to visit, and plan more effectively by choosing places to explore based on their vacation destination address, so they can view accurate distances to nearby attractions during the planning phase. While on vacation, users can then quickly select from their saved places and view how far each one is from their current location, making it easy to navigate and enjoy their trip.",
        },
        problem:
          "Users need a single platform where they can search for, book, save, and organize essential vacation details such as accommodations, dining, and entertainment. They want to avoid long commutes, but also avoid settling for options that don’t suit their needs.",
        goal: "Provide users with an all-in-one solution to organize their vacation.Enable users to quickly select a preselected place to visit based on their current location.",
      },
      // --- Competitive Audit Content Variations ---

      competitiveAudit_OnlyParagraphs: {
        paragraphs: [
          "I conducted a competitive and feature analysis of travel platforms in the market, examining both direct and indirect competitors. This analysis helped me identify their strengths and weaknesses. Competitors offer a wide variety of services, provide deals and special prices for members, enable convenient booking of all vacation essentials, and include features for personalized trip recommendations.",
          "However, I discovered that none of the competitors provide a navigation feature that shows the distance between the vacation destination and the places users have added to their trips. While their app interfaces feature modern, minimalist designs with easy and accessible navigation, the content in the trips section is often scattered and lacks relevant information, containing unnecessary and distracting details instead.",
        ],
        lists: [],
        imageUrl: "",
        imageAlt: "",
        imageCaption: "",
      },

      // Data for the User Research Section
      vacationUserResearchContent: {
        introTitle: "User Research Insights",

        painPointsTitle: "User Pain Points",
        painPoints: [
          {
            number: 1,
            headline: "Users need to search multiple sources",
            description:
              "To plan a vacation, users often need to search multiple sources to discover what’s available at their destination. The app should streamline this process by allowing users to search in one place and offering a wide range of options to choose from.",
          },
          {
            number: 2,
            headline: "No navigation information",
            description:
              "There is no navigation information that displays the distance between the vacation destination and the places users have added to their trips. The app should enable users to quickly select a saved place to visit based on their current location.",
          },
          {
            number: 3,
            headline: "Disorganized ticket and event information",
            description:
              "Users currently have to gather information about their booked events and tickets from multiple apps or emails. The app should allow users to store all their vacation booking details in one place and help them easily keep track of their entire vacation plan.",
          },
        ],
      },
      // Data for the Personas Section
      caseStudyPersonas: [
        {
          name: "Primary Persona",
          image: new URL(
            "../assets/vacation-primary-persona.png",
            import.meta.url
          ).href,
          problemStatementHeading: "Problem Statement",
          problemStatementDescription:
            "Anna is a busy accountant who needs a single platform to plan, book, and manage all vacation details because she dislikes having vacation information scattered across multiple sources and prefers to organize her trips in advance to ensure that the chosen destinations meet her family’s special needs and expectations.",
          /* journeyMapUrl: new URL(
            "../assets/vacation-primary-persona.png",
            import.meta.url
          ).href, */
        },
        {
          name: "Secondary Persona",
          image: new URL(
            "../assets/vacation-secondary-persona.png",
            import.meta.url
          ).href,
          problemStatementHeading: "Problem Statement",
          problemStatementDescription:
            "Jane is a paramedic with an unpredictable schedule and tight budget who needs to quickly see which saved places are near her current location to avoid wasting vacation time on commuting while ensuring she doesn’t make random choices that won’t meet her needs and expectations.",
          /* journeyMapUrl: new URL(
            "../assets/rabbitry-SellerUserJourney.jpg",
            import.meta.url
          ).href, */
        },
      ],

      // --- Design Decisions Content Variations ---
      // Variation 3 for Vacation case: Image + Paragraph with Heading (next to image), then another Paragraph with Heading + Image of Wireframe (next to image). Paragraph and image wrap vertically on small screens.

      designDecisions_Variation3: {
        sectionTitle: "Iterative Design & Refinements",
        paragraphs: [],
        flexibleContentBlocks: [
          {
            imageUrl: new URL(
              "../assets/vacation-paper-wireframes.jpg",
              import.meta.url
            ).href,
            imageAlt: "Design iteration showing initial layout",
            heading: "Initial Layout Considerations",
            text: "The goal of the Planner feature was to create a well-structured, minimalist design that provides useful information to help users stay focused on their planning tasks. While the Search section serves both user needs for relevant information and business needs such as promoting offers and ads, the Planner section is intended to be solely the user’s space to organize and manage their vacation.",

            /* modalLink: {
              text: "View Story Board",
              imageUrl: new URL(
                "../assets/vacation-story-board.jpg",
                import.meta.url
              ).href,
              imageAlt: "Story Board for Vacation Planner",
            }, */
          },
          {
            imageUrl: new URL("../assets/vacation-lofi-1.png", import.meta.url)
              .href,
            imageAlt: "Design iteration showing lo-fi Planner screen",
            heading: "Translating Ideas to Digital Wireframes",
            text: "This Planner screen includes a map feature that allows users to set their hotel address as the default location. This ensures that distances to places saved in their trip are calculated accurately. Users can also switch from the hotel address to their real-time location as they move around, helping them identify which saved places are nearby. I used tab elements for the Do, Eat, and Stay sections to keep navigation within the same screen. This reinforces that users are still in the Planner section and allows for quick switching between categories. The Select button and navigation bar are positioned at the bottom of the screen for easy access. Both elements are designed to hide when users scroll down to browse items, and reappear when the scroll direction changes. This approach maximizes screen space while maintaining quick access to key actions when needed.",
            reverseLayout: true,
          },
          {
            imageUrl: new URL("../assets/vacation-lofi-2.png", import.meta.url)
              .href,
            imageAlt: "Design iteration showing lo-fi Select item screen",
            text: "This is the Search screen, which opens when the Select button in the Planner section is clicked. Each search category includes its own set of filters relevant to that category’s content. For example, the Eat category offers filters for proximity to the user’s place of stay or current location, rating, cuisine type, available services, hours of operation, and more. To add items to their trip, users simply need to tap the plus button located at the top right corner of the item card.",
            reverseLayout: true,
          },
        ],
        bigImage: {},
        prototypeLink: {},
        featureHighlights: [],
        loFidelityPrototypeSection: {},
      },

      // --- Usability Study Content Variations ---

      /*  For Vacation Case Study - Variation 3 */
      usabilityStudy_TwoColumnsAndImage: {
        sectionTitle: "Usability Study Findings",
        introParagraph:
          "The testing process included an unmoderated usability study of the low-fidelity prototype, followed by a combination of moderated and unmoderated usability studies and a preference test for the high-fidelity version.",
        type: "two-column-lists-with-bottom-image",
        lists: [
          {
            heading: "Findings (Lo-fi prototype unmoderated testing)",
            items: [
              "Users had difficulty noticing the collapse button at the bottom-right of the map screen due to insufficient visual prominence.",
              "The tabs were misinterpreted as buttons by some users.",
            ],
          },
          {
            heading: "Findings (Hi-fi prototype moderated testing)",
            items: [
              "Users struggle to recognize that tickets are nested within the event card, indicating a need for stronger affordances or visual indicators.",
              "Users’ mental model suggests that clicking a place card should reveal the associated booked event.",
              "Users were unsure where the “Search” tab would take them, indicating the need for a more descriptive label.",
              "The current placement and styling of filters lack visibility—users need stronger visual cues to recognize and engage with them.",
              "Users were unsure which filters had pre-applied settings, indicating the need for a more obvious visual cue or status indicator.",
            ],
          },
        ],
        bottomImages: [
          {
            heading: "Preference Tests",
            imageUrl: new URL("../assets/preference-test.webp", import.meta.url)
              .href,
            imageAlt: "Table summarizing user feedback from usability study",
            imageCaption: "Preference Test Results.",
          },
          {
            heading: "Additional Usability Insights",
            imageUrl: new URL(
              "../assets/unmoderated-testing-vacationApp.webp",
              import.meta.url
            ).href,
            imageAlt: "Additional usability test results",
            imageCaption: "Heat Map and Unmoderated Usability Testing Results.",
          },
        ],
      },

      // --- Mockup Gallery Content Variations ---

      //Vacation Mockup Gallery
      mockupGallery_Variation5: {
        sectionTitle: "Mockups",
        introParagraph:
          "Exploring more key functionalities through high-fidelity mockups, focusing on user interaction and visual clarity.",
        type: "text-images-grid-and-bottom-image",
        sections: [
          {
            textBlock: {
              heading: "Fixing Collapse Button Visibility Issues",
              paragraphs: [
                "User testing revealed that the collapse button wasn’t noticeable. To improve usability, I made it more visually distinct with contrast and subtle shadow.",
              ],
            },
            images: [
              {
                heading: "Before",
                imageUrl: new URL(
                  "../assets/mockup-vacation-map.png",
                  import.meta.url
                ).href,
                imageAlt:
                  "Lo-fi Mockup of the map screen before usability study",
              },
              {
                heading: "After",
                imageUrl: new URL(
                  "../assets/mockup-vacation-map2.jpg",
                  import.meta.url
                ).href,
                imageAlt:
                  "Hi-fi Mockup of the map screen after usability study",
              },
            ],
          },
          {
            textBlock: {
              heading: "Refining Tab Design for Better Usability",
              paragraphs: [
                "The wireframe usability study revealed that some users perceived the tabs as buttons, so I updated their appearance in the high-fidelity prototype to improve clarity.",
              ],
            },
            images: [
              {
                heading: "Before",
                imageUrl: new URL(
                  "../assets/mockup-vacation-planner.png",
                  import.meta.url
                ).href,
                imageAlt:
                  "Planner screen mockup - lo-fi design before usability testing",
              },
              {
                heading: "After",
                imageUrl: new URL(
                  "../assets/mockup-vacation-planner2.jpg",
                  import.meta.url
                ).href,
                imageAlt: "Hi-fi planner screen mockup after redesign",
              },
            ],
          },
          {
            textBlock: {
              heading: "Design Updates After the Second Usability Testing",

              listItems: [
                "A: I enhanced the visual distinction between filters that have default settings and those that do not.",
                "B: The Search tab was renamed to Home to align with user expectations and clearly indicate that it leads to the app’s main screen.",
                "C: I redesigned the map marker that indicates the user's current location. The ticket icon serves as a shortcut to access ticket information.",
                "D: The ticket icon serves as a shortcut to access ticket information.",
              ],
            },
            images: [
              {
                heading: "After",
                imageUrl: new URL(
                  "../assets/mockup-vacation-planner3.jpg",
                  import.meta.url
                ).href,
                imageAlt:
                  "Planner screen mockup - lo-fi design before usability testing",
              },
              {
                heading: "After",
                imageUrl: new URL(
                  "../assets/mockup-vacation-planner4.jpg",
                  import.meta.url
                ).href,
                imageAlt: "Hi-fi planner screen mockup after redesign",
              },
            ],
          },
          {
            textBlock: {
              heading: "Refining Tab Design for Better Usability",
              paragraphs: [
                "Based on the finding that most users didn’t realize the ticket was inside the event card, I identified the need for clearer visual cues.",
                "To address this, a ticket icon was added to the event card to help users visually recognize that ticket information is contained within it.",
              ],
            },
            images: [
              {
                heading: "After",
                imageUrl: new URL(
                  "../assets/mockup-vacation-planner5.jpg",
                  import.meta.url
                ).href,
                imageAlt:
                  "Calendar screen mockup - hi-fi design after usability testing",
              },
            ],
          },
        ],
        bottomImage: {
          imageUrl: new URL(
            "../assets/mockups-vacation-final.webp",
            import.meta.url
          ).href,
          imageAlt: "High-fidelity mockups of the final design.",
          imageCaption: "High-fidelity mockups of the final design.",
        },
      },

      // Data for the Prototype Link Section
      prototypeLink_Variation1: {
        sectionTitle: "High-fidelity prototype",
        linkBlocks: [
          {
            heading: "Figma Link",
            url: "https://www.figma.com/proto/ZCNefKCR4FZ2qYzBTTvJxP/Vacation-app--Copy-?page-id=0%3A1&node-id=3618-1427&viewport=164%2C284%2C0.42&t=52YxaxnrlmftAnPd-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3618%3A1427",
            linkText: "View Hi-Fi Prototype",
          },
        ],
        imageUrl: new URL("../assets/figma-vacation.png", import.meta.url).href,
        imageAlt:
          "The screenshot of the Figma prototype view of the rabbitry app",
        imageCaption: "Interactive prototype showcasing key user flows.",
      },

      //Accessibility Vacation
      accessibility_Variation2: {
        sectionTitle: "Accessibility Considerations",

        type: "three-columns-paragraphs",
        columns: [
          {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0ZM19.625 11.0801L14.585 14.1035L15.7852 16.3604L18.7363 14.5723V25.4561H14.9209V28H25.3848V25.4561H21.8086V11.0801H19.625Z" fill="#FF97B8"/>
            </svg>`, // 1
            paragraph1: "The option to change language in profile settings.",
          },
          {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0ZM19.1924 10.8398C18.1046 10.8399 17.0567 11.0237 16.0488 11.3916C15.0408 11.7596 14.2003 12.2484 13.5283 12.8564L14.5605 15.1602C15.2165 14.5682 15.8966 14.1363 16.6006 13.8643C17.3206 13.5763 18.0566 13.4317 18.8086 13.4316C19.7686 13.4316 20.4972 13.6397 20.9932 14.0557C21.5051 14.4716 21.7607 15.08 21.7607 15.8799C21.7607 16.2958 21.6889 16.712 21.5449 17.1279C21.401 17.5438 21.1769 17.9759 20.873 18.4238C20.585 18.8718 20.1923 19.3597 19.6963 19.8877L14.2246 25.7197V28H25.457V25.4561H18.0557L21.7852 21.5684C22.3131 21.0244 22.7609 20.5038 23.1289 20.0078C23.5128 19.4959 23.8245 18.9995 24.0645 18.5195C24.3203 18.0397 24.5042 17.5599 24.6162 17.0801C24.7442 16.5842 24.8086 16.0802 24.8086 15.5684C24.8086 14.5605 24.5931 13.704 24.1611 13C23.7291 12.296 23.0966 11.7596 22.2646 11.3916C21.4327 11.0237 20.4083 10.8398 19.1924 10.8398Z" fill="#FF97B8"/></svg>`, // 2
            paragraph1:
              "A high color contrast for people with different sight abilities.",
          },
          {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0ZM19.2168 10.8398C18.1288 10.8398 17.0803 11.0162 16.0723 11.3682C15.0645 11.7202 14.2246 12.2165 13.5527 12.8564L14.5605 15.1602C15.2165 14.5682 15.905 14.1363 16.625 13.8643C17.3449 13.5763 18.1212 13.4316 18.9531 13.4316C19.8808 13.4317 20.5845 13.624 21.0645 14.0078C21.5605 14.3918 21.8086 14.9525 21.8086 15.6885C21.8085 16.2163 21.6882 16.6643 21.4482 17.0322C21.2083 17.4001 20.8723 17.6886 20.4404 17.8965C20.0085 18.0883 19.4886 18.1836 18.8809 18.1836H16.457V20.7275H19.1689C20.1928 20.7276 20.9691 20.9282 21.4971 21.3281C22.0408 21.7121 22.3124 22.3039 22.3125 23.1035C22.3125 23.6475 22.1847 24.1121 21.9287 24.4961C21.6887 24.8801 21.3286 25.1684 20.8486 25.3604C20.3687 25.5523 19.7762 25.6484 19.0723 25.6484C18.1926 25.6484 17.3609 25.5121 16.5771 25.2402C15.7931 24.9682 15.0245 24.5438 14.2725 23.9678L13.2646 26.3203C13.7285 26.7202 14.2727 27.0636 14.8965 27.3516C15.5205 27.6396 16.1931 27.856 16.9131 28C17.649 28.1599 18.4011 28.2402 19.1689 28.2402C20.4328 28.2402 21.5207 28.048 22.4326 27.6641C23.3446 27.2641 24.0489 26.696 24.5449 25.96C25.0408 25.224 25.289 24.36 25.2891 23.3682C25.2891 22.6002 25.1444 21.9201 24.8564 21.3281C24.5684 20.7361 24.1524 20.2483 23.6084 19.8643C23.1978 19.5744 22.7237 19.3569 22.1855 19.2129C22.9062 18.9444 23.4934 18.524 23.9443 17.9443C24.5043 17.2084 24.7851 16.3361 24.7852 15.3281C24.7852 14.3841 24.5603 13.5837 24.1123 12.9277C23.6803 12.2559 23.0486 11.7435 22.2168 11.3916C21.3848 11.0236 20.3847 10.8399 19.2168 10.8398Z" fill="#FF97B8"/>`, // 3
            paragraph1: "Voice input for search fields.",
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

      // --- Case Study Navigation Data ---
      prevCaseStudy: {
        name: "Medical Treatment Cost Feature",
        link: "/case-study/medical", // case study link
        thumbnail: new URL("../assets/medical-thumbnail.png", import.meta.url)
          .href,
      },
      nextCaseStudy: {
        name: "Rabbitry Responsive Website",
        link: "/case-study/rabbitry", // case study link
        thumbnail: new URL("../assets/rabbitry-thumbnail.png", import.meta.url)
          .href,
      },
    };
  },

  created() {
    //Set the content for the Design Decisions section
    this.currentDesignDecisionContent = this.designDecisions_Variation3; // Vacation

    // set competitive audit content
    this.currentCompetitiveAuditContent = this.competitiveAudit_OnlyParagraphs; // Vacation

    // Set the content for the Usability Study section
    this.currentUsabilityStudyContent = this.usabilityStudy_TwoColumnsAndImage; // Vacation

    // Set the content for the Mockup Gallery section
    this.currentMockupGalleryContent = this.mockupGallery_Variation5; // Vacation

    // Prototype Link section
    this.currentPrototypeLinkContent = this.prototypeLink_Variation1;

    //  Accessibility section
    this.currentAccessibilityContent = this.accessibility_Variation2; //Vacation

    this.currentTakeawaysContent = this.takeaways_Variation3; //Vacation Takeaways
  },
};
</script>

  <style scoped>
.case-wrapper {
  background: #f7f8f9;
}
</style>
