import { Meta, Story } from '@storybook/react';
import React from 'react';
import * as RmfModels from 'rmf-models';
import { FetchTasksResult, TaskPanel as TaskPanel_, TaskPanelProps } from '../../lib';
import { makeTask } from '../../tests/test-data/tasks';

export default {
  title: 'Tasks/Task Panel',
  component: TaskPanel_,
  argTypes: {
    fetchTasks: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const failedTask = makeTask('failed_task', 3, 3);
failedTask.state = RmfModels.TaskSummary.STATE_FAILED;

const completedtasks = Array.from(Array(100)).map((_, idx) => {
  const task = makeTask(`completed_task_${idx}`, 3, 3);
  task.state = RmfModels.TaskSummary.STATE_COMPLETED;
  return task;
});

const tasks = [
  makeTask('active_task', 3, 3),
  makeTask('active_task_2', 4, 3),
  failedTask,
  ...completedtasks,
];

export const TaskPanel: Story<TaskPanelProps> = (args) => {
  return (
    <>
      <TaskPanel_
        {...args}
        style={{ height: '95vh', margin: 'auto', maxWidth: 1600 }}
        submitTasks={() => new Promise((res) => setTimeout(res, 1000))}
        cancelTask={() => new Promise((res) => setTimeout(res, 1000))}
      ></TaskPanel_>
    </>
  );
};

async function fetchTasks(limit: number, offset: number): Promise<FetchTasksResult> {
  return {
    tasks: tasks.slice(offset, offset + limit),
    totalCount: tasks.length,
  };
}

TaskPanel.args = {
  fetchTasks,
  cleaningZones: ['test_zone_0', 'test_zone_1'],
  loopWaypoints: ['test_waypoint_0', 'test_waypoint_1'],
  deliveryWaypoints: ['test_waypoint_0', 'test_waypoint_1'],
  dispensers: ['test_dispenser_0', 'test_dispenser_1'],
  ingestors: ['test_ingestor_0', 'test_ingestor_1'],
};