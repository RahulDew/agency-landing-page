import ArleneMcCoy from "@/public/assets/images/ArleneMcCoy.png";
import BrooklynSimmons from "@/public/assets/images/BrooklynSimmons.png";
import EstherHoward from "@/public/assets/images/EstherHoward.png";
import JaneCooper from "@/public/assets/images/JaneCooper.png";

export const TestimonialSectionData = {
  TestimonialProps: {
    direction: "left",
    speed: "fast",
    pauseOnHover: true,
  },
  heading: {
    title: "Hear what our customers say : )",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, voluptatem accusamus rem quam amet quibusdam corrupti doloremque enim, sit aperiam perspiciatis sed magni quas, architecto quaerat eius in similique deserunt.",
  },
  testimonialProps: {
    direction: "left",
    speed: "fast",
    pauseOnHover: true,
  },
  testimonialList: [
    {
      ProfileImg: BrooklynSimmons,
      name: "Brooklyn Simmons",
      from: "manam",
      testimonial:
        "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci.",
    },
    {
      ProfileImg: EstherHoward,
      name: "Esther Howard",
      from: "Offmax",
      testimonial:
        "Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit.",
    },
    {
      ProfileImg: ArleneMcCoy,
      name: "Arlene McCoy",
      from: "bloopixel",
      testimonial:
        "Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est.",
    },
    {
      ProfileImg: JaneCooper,
      name: "Jane Cooper",
      from: "unpexel",
      testimonial:
        "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis.",
    },
  ],
};
