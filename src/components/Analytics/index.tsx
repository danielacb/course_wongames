const Analytics = () => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-3HCVW4H2M5"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING}');`
      }}
    />
  </>
)

export default Analytics
