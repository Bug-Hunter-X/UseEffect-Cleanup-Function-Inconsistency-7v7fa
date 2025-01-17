# React useEffect Cleanup Function Inconsistency

This repository demonstrates a potential issue with the cleanup function in React's `useEffect` hook. The cleanup function is intended to execute before the component unmounts or when the component re-renders. However, in this example, the cleanup function's log message doesn't consistently appear when the component updates. 

## Problem Description

The `useEffect` hook is used to perform side effects in functional components. The cleanup function, returned from the `useEffect` callback, is crucial for managing resources and performing necessary cleanup actions when the component is unmounted. However, in the provided example, the cleanup function's behavior is inconsistent when the component updates. 

## Solution

The issue can be addressed by adding the state variable to the dependency array of useEffect. This ensures the cleanup function is executed every time the state updates and that the cleanup runs properly.