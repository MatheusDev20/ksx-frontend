import { BaseLayout } from "../components/Layout";

export default function EmployeesLayout({children}: { children: React.ReactNode }) {
    return (
    <BaseLayout>
        {children}
    </BaseLayout>
    )
}