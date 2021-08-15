# Error Boundary

* Error boundaries are React components that catch Javascript Errors in build in their child component tree, log those errors, and display a fallback UI.

* A class component becomes an Error Boundary by defining either or both of getGetDerivedStateFromError and componentDidCatch lifecycle methods.

* getDerivedStateFromError method is used to display the fallback UI when error occurs and componentDidCatch method is used to log the error information.