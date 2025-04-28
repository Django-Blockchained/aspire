const cardMenuData = [
    {
        id: "freeze",
        src: "/freezeCard.png",
        alt: "Freeze Card",
        buttonText: (isFrozen) => (isFrozen ? "Unfreeze Card" : "Freeze Card"),
      },
      {
        id: "spendLimit",
        src: "/setSpendLimit.png",
        alt: "Set Spend Limit",
        text: "Set Spend Limit",
      },
      {
        id: "gpay",
        src: "/GPay.png",
        alt: "GPay",
        text: "Add to GPay",
      },
      {
        id: "replace",
        src: "/replaceCard.png",
        alt: "Replace Card",
        text: "Replace Card",
      },
      {
        id: "deactivate",
        src: "/deactivateCard.png",
        alt: "Deactivate Card",
        text: "Deactivate Card",
      },
]

export default cardMenuData