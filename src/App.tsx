import { Layout } from './components/Layout';
import { QueryProvider } from './providers/query';
import { HomeScreen } from './screens/Home';

export function App() {
  return (
    <QueryProvider>
      <Layout>
        <HomeScreen />
      </Layout>
    </QueryProvider>
  );
}
