import React, { useState, useRef, useEffect } from "react";

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // FastAPI endpoint
    const API_URL = "https://raees456-portfolio-rag.hf.space/query";

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendQuery = async (message: string) => {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                query: message  // FastAPI expects "query" field
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        return response.json();
    };

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input;
        setMessages(prev => [...prev, { sender: "user", text: userMessage }]);
        setInput("");
        setIsLoading(true);

        try {
            console.log(`Sending query: ${userMessage}`);
            
            const data = await sendQuery(userMessage);
            console.log("Response data:", data);
            
            // Handle FastAPI response format: {"query": "...", "results": "..."}
            const botReply = data?.results || data?.response || "I don't know";

            setMessages(prev => [...prev, { sender: "bot", text: botReply }]);

        } catch (error) {
            console.error("Chatbot error:", error);
            setMessages(prev => [
                ...prev, 
                { 
                    sender: "bot", 
                    text: `⚠️ Error: ${error instanceof Error ? error.message : 'Unknown error'}. Please check if your FastAPI server is running.`
                }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={toggleChat}
                className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            >
                💬 Chat {isLoading && <span className="animate-spin ml-1">⟳</span>}
            </button>

            {isOpen && (
                <div className="mt-2 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-xl flex flex-col">
                    <div className="bg-blue-600 text-white p-2 rounded-t-lg font-semibold flex justify-between items-center">
                        <span>RAG Chatbot</span>
                        <button
                            onClick={toggleChat}
                            className="text-white hover:text-gray-200 text-lg leading-none"
                        >
                            ×
                        </button>
                    </div>

                    <div className="flex-1 p-2 overflow-y-auto text-sm space-y-2">
                        {messages.length === 0 && (
                            <div className="text-gray-500 text-center py-4">
                                Start a conversation...
                            </div>
                        )}
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`p-2 rounded-lg max-w-[85%] break-words ${
                                    msg.sender === "user"
                                        ? "bg-blue-100 text-blue-900 ml-auto text-right"
                                        : "bg-gray-100 text-gray-900 mr-auto text-left"
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="bg-gray-100 text-gray-600 p-2 rounded-lg mr-auto max-w-[85%] text-left">
                                <span className="animate-pulse">Thinking...</span>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-2 border-t flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    sendMessage();
                                }
                            }}
                            placeholder="Type a message..."
                            disabled={isLoading}
                            className="flex-1 border rounded px-2 py-1 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                        <button
                            onClick={sendMessage}
                            disabled={!input.trim() || isLoading}
                            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm"
                        >
                            {isLoading ? "..." : "Send"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;