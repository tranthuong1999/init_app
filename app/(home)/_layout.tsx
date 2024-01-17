
import { Stack } from "expo-router";

export const unstable_settings = {
    initialRouterName: 'index'
}

export default function Layout() {
    return (
        <Stack
            screenOptions={{ headerShown: true }}
        >
            <Stack.Screen name="index"
                options={{
                    title: "Home"

                }}
            />


        </Stack>
    )
}