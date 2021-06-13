export const initState = [
    {
      id: 1,
      role: "GM",
      list: []
    },
    {
      id: 2,
      role: "LM",
      list: []
    }
  ];
  
  export const actionAPI = [
    {
      actionID: 1,
      name: "Get course"
    },
    {
      actionID: 2,
      name: "Get student"
    },
    {
      actionID: 3,
      name: "Get parent"
    }
  ];
  export const groupAPI = [
    {
      groupID: 1,
      role: "GM",
      list: [
        {
          actionID: 1,
          name: "Get course"
        },
        {
          actionID: 3,
          name: "Get parent"
        }
      ]
    },
    {
      groupID: 2,
      role: "LM",
      list: [
        {
          actionID: 1,
          name: "Get course"
        },
        {
          actionID: 2,
          name: "Get student"
        }
      ]
    }
  ];
  