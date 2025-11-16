// Tailwind CSS Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#3B82F6',
                secondary: '#1F2937',
            },
            animation: {
                'fadeIn': 'fadeIn 0.3s ease-in-out',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                }
            }
        }
    }
}