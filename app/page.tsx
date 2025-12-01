import { StructuredData } from "@/components/StructuredData";
import DemoWrapper from "./DemoWrapper";

export default function Home() {
  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="local-business" />
      <DemoWrapper />
    </>
  );
}
