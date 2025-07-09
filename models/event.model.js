const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    eventTitle: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    eventTime: {
      type: String,
      required: true,
    },
    eventType: {
      type: Boolean,
      default: false,
    },
    hostedBy: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    additionalInfo: {
      dressCode: String,
      ageRestrictions: String,
      eventTags: [String],
    },
    sessionStartTime: {
      type: String,
      required: true,
    },
    sessionEndTime: {
      type: String,
      required: true,
    },
    venueAddress: [String],
    speakers: [
      {
        speakerName: String,
        speakerDesignation: String,
        speakerImg: String,
      },
    ],
    eventPrice: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);

// {
//     "eventTitle": "Marketing Seminar",
//     "imageUrl": "https://plus.unsplash.com/premium_photo-1664475926084-d20248544896?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "eventTime": "Thu Jul 14 2025  7:30 AM IST",
//     "eventType": false,
//     "hostedBy": "Marketing Experts",
//     "details": "A marketing seminar is an educational event focused on teaching participants about various aspects of marketing. These seminars can cover a wide range of topics, from foundational marketing principles to advanced digital marketing strategies. They are designed to help individuals, whether beginners or experienced professionals, enhance their marketing skills and knowledge",
//     "additionalInfo": {
//         "dressCode": "Smart casual",
//         "ageRestrictions": "18 and above",
//         "eventTags": [
//             "marketing",
//             "digital"
//         ]
//     },
//     "sessionStartTime": "Tue Aug 16 2025 at 10:00:00 AM",
//     "sessionEndTime": "Tue Aug 16 2025 at 01:00:00 PM",
//     "venueAddress": [
//         "Marketing city",
//         "Hyderabad"
//     ],
//     "speakers": [
//         {
//             "speakerName": "Kishore CH",
//             "speakerDesignation": "Marketing Manager",
//             "speakerImg": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
//         },
//         {
//             "speakerName": "Ooha S",
//             "speakerDesignation": "Marketing Manager",
//             "speakerImg": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         }
//     ],
//     "eventPrice": 2000
// }
