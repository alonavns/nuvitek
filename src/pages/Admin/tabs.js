export const TabInfo = [
  {
    label: "Team Members",
    ref: {
      collection: "team-members",
      storage: "team-members"
    },
    inputs: [
      { key: "avatar", type: "Image" },
      { key: "name", type: "Input" },
      { key: "title", type: "Input" },
      { key: "bio", type: "Text" },
      { key: "type", type: "CheckBox"},
      {
        key: "social",
        type: "Parent",
        label: "Social Links",
        childs: [
          { key: "facebook", type: "Link" },
          { key: "twitter", type: "Link" },
          { key: "linkedIn", type: "Link" }
        ]
      }
    ]
  },
  {
    label: "Users",
    ref: {
      collection: "users",
      storage: "users"
    },
    inputs: [
      { key: "avatar", type: "Image" },
      { key: "name", type: "Input" },
      { key: "title", type: "Input" },
      { key: "bio", type: "Text" },
      { key: "email", type: "Input" }
    ]
  },
  {
    label: "Articles",
    ref: {
      collection: "articles",
      storage: "articles"
    },
    inputs: [
      { key: "title", type: "Input" },
      { key: "content1", type: "Text" },
      { key: "content2", type: "Text" },
      { key: "content3", type: "Text" },
      { key: "content4", type: "Text" },
      { key: "content5", type: "Text" },
      { key: "content6", type: "Text" },
      { key: "image1", type: "Image" },
      { key: "image2", type: "Image" }
    ]
  }
];
