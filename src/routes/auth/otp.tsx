import { createFileRoute } from "@tanstack/react-router";
import { AuthLayout } from "@layouts/auth-layout";
import { OTPScreen } from "@containers/auth/otp";

export const Route = createFileRoute("/auth/otp")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <AuthLayout currentRoute="/auth/otp">
            <OTPScreen />
        </AuthLayout>
    );
}
