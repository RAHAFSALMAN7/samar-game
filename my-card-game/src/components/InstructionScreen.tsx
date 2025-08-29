 // src/components/InstructionScreen.tsx
import React, { useState } from "react";
import { cardsData } from "../data/cards";

interface InstructionScreenProps {
  onBack?: () => void;
}

const InstructionScreen: React.FC<InstructionScreenProps> = ({ onBack }) => {
  const [popupImg, setPopupImg] = useState<string | null>(null);
const cards = cardsData.instruction; // صحيح: "instruction" وليس "instructions"

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#002A4f",
        color: "#EBEBDF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button
        onClick={onBack}
        style={{
          alignSelf: "flex-start",
          marginBottom: "20px",
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          backgroundColor: "#EBEBDF",
          color: "#002A4f",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        🏠 العودة
      </button>

      <h1 style={{ fontSize: "2rem", marginBottom: "20px", textAlign: "center" }}>
        📖 كروت التعليمات
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {cards.map((card, index) => (
          <img
            key={index}
            src={card}
            alt={`instruction-card-${index}`}
            style={{
              width: "200px",
              borderRadius: "12px",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
              transition: "transform 0.2s",
            }}
            onClick={() => setPopupImg(card)}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ))}
      </div>

      {popupImg && (
        <div
          onClick={() => setPopupImg(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <img
            src={popupImg}
            alt="popup card"
            style={{
              maxWidth: "90%",
              maxHeight: "80%",
              borderRadius: "12px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.6)",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default InstructionScreen;
