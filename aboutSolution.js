```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    // Verify route before navigation
    const validRoute = router.asPath === '/about' ? '/contact' : null;

    if(validRoute){
        router.push(validRoute);
    } else {
        console.error('Invalid route');
    }
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Contact Page</button>
    </div>
  );
}
```