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
  { stt: 1, name: "Văn Nhân", number: 8, size: "L", dob: "25-11", position: "Bầu" },
  { stt: 2, name: "Đỗ Đạt", number: 4, size: "XL", position: "HLV" },
  { stt: 3, name: "Đinh Thiên", number: 10, size: "M", position: "GK" },
  { stt: 4, name: "Quốc Hưng (GK)", number: 43, size: "L", position: "GK" },
  { stt: 5, name: "Hoàng Trung (GK)", number: 1, size: "L", position: "GK" },
  { stt: 6, name: "Tuấn Vũ (HLV)", number: 9, size: "M", position: "HLV" },
  { stt: 7, name: "Nguyễn Sỹ", number: 19, size: "M" },
  { stt: 8, name: "Trần Lĩnh", number: 17, size: "M" },
  { stt: 9, name: "Lâm Viên", number: 47, size: "M" },
  { stt: 10, name: "Huỳnh Phong", number: 78, size: "L" },
  { stt: 11, name: "Võ Lực", number: 74, size: "S" },
  { stt: 12, name: "Phi Thông", number: 29, size: "L" },
  { stt: 13, name: "Tôn Định", number: 14, size: "L" },
  { stt: 14, name: "Trần Dũng", number: 2, size: "M" },
  { stt: 15, name: "Phước Classic", number: 7, size: "M" },
  { stt: 16, name: "Trương Vinh", number: 22, size: "L" },
  { stt: 17, name: "Nguyễn Bảo (GK)", number: 26, size: "M", position: "GK" },
  { stt: 18, name: "Viết Thành", number: 15, size: "L" },
  { stt: 19, name: "Hữu Phước", number: 12, size: "L" },
  { stt: 20, name: "Tấn Hòa", number: 6, size: "L" },
  { stt: 21, name: "Đức Nhật", number: 18, size: "L" },
  { stt: 22, name: "Văn An", number: 99, size: "L" },
  { stt: 23, name: "Hữu Thức", number: 16, size: "M" },
  { stt: 24, name: "Trần Tín", number: 21, size: "S" },
  { stt: 25, name: "Nguyên Phú", number: 20, size: "M" },
  { stt: 26, name: "Xuân Mạnh", number: 92, size: "M" },
  { stt: 27, name: "Ngọc Huỳnh", number: 11, size: "L" },
  { stt: 28, name: "Phúc Khang (GK)", number: 61, size: "L", position: "GK" },
  { stt: 29, name: "Văn Hà", number: 5, size: "L" },
  { stt: 30, name: "Trần Vũ", number: 32, size: "L" },
  { stt: 31, name: "Ngọc Huy (GK)", number: 35, size: "L", position: "GK" },
  { stt: 32, name: "Minh Giàu", number: 36, size: "M" },
  { stt: 33, name: "Phạm Hát", number: 52, size: "XL" },
  { stt: 34, name: "Duy Tuấn", number: 77, size: "L", dob: "13/05/1999", position: "Tiền vệ cánh" },
  { stt: 35, name: "Bá Trung", number: 55, size: "L" },
  { stt: 36, name: "Công Huy", number: 34, size: "M" },
  { stt: 37, name: "Hải Nam", number: 39, size: "M" },
  { stt: 38, name: "Võ Thùy", number: 70, size: "L" },
  { stt: 39, name: "Anh Tuấn", number: 83, size: "L" }
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
  if (pos.includes("bầu")) return "Bầu";
  if (pos.includes("hlv")) return "HLV";
  if (pos.includes("gk") || pos.includes("thủ môn")) return "GK";
  if (pos.includes("hậu vệ") || pos.includes("trung vệ")) return "DF";
  if (pos.includes("tiền vệ")) return "MF";
  if (pos.includes("tiền đạo")) return "FW";
  return "?";
}
