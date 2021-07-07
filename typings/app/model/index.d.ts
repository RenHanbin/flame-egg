// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportUsers from '../../../app/model/users';

declare module 'egg' {
  interface IModel {
    Users: ReturnType<typeof ExportUsers>;
  }
}
