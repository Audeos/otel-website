import React from "react";

const CommunicationPage: React.FC = () => {


return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <p className={"text-2xl mb-6 italic "}>Değerli sorularınız için</p>
        <div className="bg-white p-8 rounded shadow-md w-full max-w-xl">
            <h1 className="text-3xl font-bold mb-6 text-center">İletişim</h1>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Adınız
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Adınızı girin"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        E-posta
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="E-posta adresinizi girin"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Mesajınız
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Mesajınızı yazın"
                    ></textarea>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Gönder
                    </button>
                </div>
            </form>
            <div className="mt-8 text-center">
                <h2 className="text-xl font-semibold mb-2">Bize Ulaşın</h2>
                <p className="text-gray-700">Adres: İzmir Sokak No:123, İzmir, 12345 Türkiye</p>
                <p className="text-gray-700">Telefon: +90 123 456 7890</p>
                <p className="text-gray-700">E-posta: info@talhaotel.com</p>
            </div>
        </div>
    </div>
)
}

export default CommunicationPage
