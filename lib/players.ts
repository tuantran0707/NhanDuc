export type Player = {
  stt: number;
  name: string;
  number: number;
  size?: string;
  dob?: string;
  position?: string;
};

// Dữ liệu cầu thủ Nhân Đức FC (do CLB cung cấp)
export const players: Player[] = [
  { stt: 1, name: "Văn Nhân", number: 8, position: "Trưởng đoàn" },
  { stt: 2, name: "Hoàng Nguyễn", number: 68, position: "HLV" },
  { stt: 3, name: "Đỗ Đạt", number: 4, position: "Trợ lý HLV" },
  { stt: 4, name: "Hoàng Trung", number: 1, position: "GK" },
  { stt: 5, name: "Quốc Hưng", number: 43, position: "GK" },
  { stt: 6, name: "Ngọc Huy", number: 35, position: "GK" },
  { stt: 7, name: "Văn Hà", number: 5, position: "Defenders" },
  { stt: 8, name: "Vinh Trương (Vinh Dybala)", number: 22, position: "Midfielders" },
  { stt: 9, name: "Thành Hiếu", number: 37, position: "Midfielders" },
  { stt: 10, name: "Đức Mạnh", number: 27, position: "Midfielders" },
  { stt: 11, name: "Phi Thông (Thông Muller)", number: 29, position: "Forwards" },
  { stt: 12, name: "Tony Trần", number: 96, position: "Forwards" },
  { stt: 13, name: "Phú Nguyên (Phú Pepe)", number: 20, position: "Defenders" },
  { stt: 14, name: "Sỹ Nguyễn", number: 19, position: "Midfielders" },
  { stt: 15, name: "Xuân Mạnh (Mạnh Ka78)", number: 92, position: "Midfielders" },
  { stt: 16, name: "Lâm Viên", number: 47, position: "Midfielders" },
  { stt: 17, name: "Trần Tín", number: 21, position: "Defenders" },
  { stt: 18, name: "Dũng Trần", number: 2, position: "Defenders" },
  { stt: 19, name: "Quốc Vương", number: 31, position: "Forwards" },
  { stt: 20, name: "Huỳnh Phong", number: 78, position: "Defenders" },
  { stt: 21, name: "Võ Lực", number: 74, position: "Defenders" },
  { stt: 22, name: "Viết Thành", number: 15, position: "Defenders" },
  { stt: 23, name: "Duy Tuấn", number: 77, position: "Forwards" },
  { stt: 24, name: "Bá Trung", number: 55, position: "Forwards" },
  { stt: 25, name: "Đinh Thiên", number: 10, position: "Forwards" },
  { stt: 26, name: "Hữu Thức", number: 16, position: "Midfielders" },
  { stt: 27, name: "Tấn Phước (Phước Classic)", number: 7, position: "Forwards" },
  { stt: 28, name: "Hữu Phước", number: 12, position: "Midfielders" },
  { stt: 29, name: "Anthony", number: 99, position: "Forwards" },
  { stt: 30, name: "Hát Phạm", number: 52, position: "Midfielders" },
  { stt: 31, name: "Ngọc Huỳnh", number: 11, position: "Midfielders" },
  { stt: 32, name: "Quốc Khánh", number: 28, position: "Forwards" },
  { stt: 33, name: "Quốc Núi", number: 23, position: "Midfielders" },
  { stt: 34, name: "Thanh Hùng", number: 26, position: "Midfielders" },
  { stt: 35, name: "Minh Tân", number: 57, position: "Defenders" },
  { stt: 36, name: "Tuấn Phát", number: 14, position: "Midfielders" },
  { stt: 37, name: "Hoài Bảo", number: 39, position: "Midfielders" }
];

export const positionGroups = [
  { key: "Bầu", label: "Ban lãnh đạo" },
  { key: "HLV", label: "Huấn luyện viên" },
  { key: "GK", label: "Thủ môn" },
  { key: "DF", label: "Hậu vệ" },
  { key: "MF", label: "Tiền vệ" },
  { key: "FW", label: "Tiền đạo" },
  { key: "?", label: "Chưa phân loại" }
];

export function groupKey(p: Player): string {
  if (!p.position) return "?";
  const pos = p.position.toLowerCase();
  if (pos.includes("bầu") || pos.includes("trưởng đoàn")) return "Bầu";
  if (pos.includes("hlv")) return "HLV";
  if (pos.includes("gk") || pos.includes("thủ môn")) return "GK";
  if (pos.includes("hậu vệ") || pos.includes("trung vệ") || pos.includes("defender")) return "DF";
  if (pos.includes("tiền vệ") || pos.includes("midfielder")) return "MF";
  if (pos.includes("tiền đạo") || pos.includes("forward")) return "FW";
  return "?";
}
