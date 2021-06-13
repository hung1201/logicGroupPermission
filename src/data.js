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
    },
    {
      id: 3,
      role: "BM",
      list: []
    },
    {
        id:4,
        role:'BA',
        list:[]
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
    ,
    {
      actionID: 4,
      name: "Get List"
    }
    ,
    {
      actionID: 5,
      name: "Get game"
    }
    ,
    {
      actionID: 6,
      name: "Get schedule"
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
    },
    {
      groupID: 3,
      role: "BA",
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
  