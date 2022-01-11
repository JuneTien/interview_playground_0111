import React, { useReducer } from "react";
/**
 * 實作 RreactRedux connect()
 * @param {*} mapStateToProps
 * @param {*} mapDispatchToProps
 */
import { createStore } from "redux";

export const createExampleStore = () =>
  createStore((state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  });

export const connect = (store) => (mapStateToProps, mapDispatchToProps) => (
  Component
) => {
  // 請在這裡實作
  // mapStateToProps(createExampleStore());
  return Component;
};
