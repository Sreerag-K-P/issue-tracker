import { Button } from "@radix-ui/themes";
import Link from "next/link";
function IssuesPage() {
  return (
    <div>
      <Button>
        <Link href="/issues/new">New Isseue</Link>
      </Button>
    </div>
  );
}

export default IssuesPage;
