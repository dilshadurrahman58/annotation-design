import pathlib, re

def swap_c2_c3(path):
    text = path.read_text()
    lines = text.splitlines()
    out = []
    in_block = False
    block = []
    brace_count = 0
    for line in lines:
        if not in_block and 'perConsiderationWhy' in line:
            in_block = True
            out.append(line)
            brace_count = line.count('{') - line.count('}')
            continue
        if in_block:
            brace_count += line.count('{') - line.count('}')
            block.append(line)
            if brace_count == 0:
                # swap lines
                i2 = i3 = None
                for i, l in enumerate(block):
                    if re.search(r"\bC2\b\s*:", l):
                        i2 = i
                    if re.search(r"\bC3\b\s*:", l):
                        i3 = i
                if i2 is not None and i3 is not None:
                    block[i2], block[i3] = block[i3], block[i2]
                out.extend(block)
                block = []
                in_block = False
            continue
        out.append(line)
    path.write_text("\n".join(out))

if __name__ == '__main__':
    swap_c2_c3(pathlib.Path('data/figures.js'))
    print('swap complete')
