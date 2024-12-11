import 'normalize.css';
import Hero from '../components/sections/hero/Hero';
import { getServerSession } from 'next-auth';
import { authOptions } from './lib/nextAuth';
export default async function Home() {
  return (
    <>
    <Hero />
    </>
  );
}
