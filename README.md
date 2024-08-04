# @perfio/web-vitals

[Perfio](https://perfio.dev) is a service for collecting and analyzing performance metrics. The
`@perfio/web-vitals` library helps gather these metrics effectively. This README provides
instructions on how to use the library in different environments, such as Next.js and browser
environments.

[![Perfio Logo](https://perfio.dev/logo.png)](https://perfio.dev)

## Installation

You can install the `@perfio/web-vitals` library using npm or yarn:

```bash
npm install @perfio/web-vitals
```

or

```bash
yarn add @perfio/web-vitals
```

## Usage

### Next.js Integration

For integrating with Next.js, you can use the entry point `@perfio/web-vitals/next`. This entry
point is designed to work seamlessly with the Next.js framework.

#### Setup

1. **Import the Provider**: In your Next.js application, import the `PerfioProvider` from
   `@perfio/web-vitals/next`.

   ```javascript
   import { PerfioProvider } from '@perfio/web-vitals/next';
   ```

2. **Add to Your Application**.

   ```javascript
   import { PerfioProvider } from '@perfio/web-vitals/next';

   import '../styles/globals.css';

   function RootLayout({ children }) {
     return (
       <html lang="en">
         <body>
           {children}
           {process.env.NEXT_PUBLIC_PERFIO_TOKEN && (
             <PerfioProvider token={process.env.NEXT_PUBLIC_PERFIO_TOKEN} />
           )}
         </body>
       </html>
     );
   }

   export default RootLayout;
   ```

This setup ensures that performance metrics are collected and sent to Perfio for analysis.

### Browser Integration

For usage in a browser environment, you have two options: importing the library via a script with
type module or using the default index entry point.

#### Import via Script

1. **Include Script Tag**: Add the following script tag to your HTML file to load the library.

   ```html
   <script
     type="module"
     src="https://cdn.jsdelivr.net/npm/@perfio/web-vitals@1/browser.esm.js?token=1234567890"
   ></script>
   ```

This approach allows you to load the library directly in the browser and start collecting. Replace
`1234567890` with your Perfio token.

#### Default Import

1. **Import the Library**: In your JavaScript file, import the `reportMetrics` function.

   ```javascript
   import { reportMetrics } from '@perfio/web-vitals';
   ```

2. **Call the Function**: Simply call the `reportMetrics` function to start collecting performance
   metrics.

   ```javascript
   reportMetrics({
     token: '123456789',
   });
   ```

This setup is suitable for most standard web projects where you want to collect and report
performance metrics to Perfio.
