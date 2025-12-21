import { Loader2 } from 'lucide-react';

export function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <Loader2 className="h-8 w-8 animate-spin mx-auto text-blue-600" />
                <p className="mt-2 text-gray-600">Loading...</p>
            </div>
        </div>
    );
}