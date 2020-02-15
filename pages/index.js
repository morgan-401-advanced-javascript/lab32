import Layout from '../components/MyLayout';
import Link from 'next/link';

export default function Blog() {
  return (
    <Layout>
        <div>
      <h1>Morgan T Shaw</h1>
      <p>Passionate software developer with a knack for problem solving. I enjoy the outdoors, trying new things, and spending time with my dog Hachi!</p>

        </div>

      <style jsx>{`
        h1,
        a {
          font-family: 'Sans';
        }
      `}</style>
    </Layout>
  );
}