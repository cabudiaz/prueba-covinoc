
export interface TaskData {
    id: string;
    title: string;
    state: boolean;
  }

  export interface TaskDataList extends Array<TaskData>{}